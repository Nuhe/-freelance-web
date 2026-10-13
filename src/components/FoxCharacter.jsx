import { useId } from 'react'

// Hand-drawn FoxOps mascot. Every line is a tapered filled shape (a "brush" stroke
// generated from a Bezier spine), so the weight swells and thins like ink.
// Animatable groups: fox-tail, fox-body, fox-head, fox-ear-left/right, fox-lid, fox-pupil.
// Pupils read --look-x / --look-y (-1..1) set by useFoxLife; styling lives in index.css.

const COLOR = { orange: '#f3732d', cream: '#f5f0eb', ink: '#140a06', dark: '#2a120a', deep: '#d84a12', hatch: '#a8360c', fur: '#d8c6b5', pupil: '#0a0909' }
// Alpha step table: any dithered coverage above 5% becomes fully opaque ink.
const STEP = '0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1'

const SHAPE = {
  tail: "M470 600C540 604 600 584 622 540Q632 528 628 514Q642 496 634 476C644 430 644 380 632 336Q638 322 628 314C616 262 580 222 520 212C540 236 556 266 560 300Q550 306 558 314C556 360 536 420 500 470C490 500 480 540 470 600Z",
  tailTip: "M500 180H660V320L626 312L620 328L608 314L600 330L590 314L580 328L572 310L562 318L556 290L500 280Z",
  body: "M150 600C156 530 186 450 236 390C250 340 270 300 300 290L420 290C440 320 446 350 446 368C496 404 532 476 544 600Z",
  chest: "M214 330C262 352 362 360 446 330C444 400 412 456 362 500L350 482L340 506L324 486L312 510L300 488L284 500C252 452 226 392 214 330Z",
  head: "M132 296C150 276 182 246 214 214C240 190 266 164 302 150C344 136 392 146 418 176C436 196 444 222 446 244L474 252L454 268L482 286L452 296L470 320L438 324L444 352L410 350C384 366 342 374 304 368C266 362 232 350 208 338C186 328 160 318 144 312C130 308 126 302 132 296Z",
  muzzle: "M100 320C140 316 182 308 214 306C246 304 272 308 300 306C326 304 356 292 386 276L394 258L404 272L414 250L424 266L436 244L448 258L458 240L520 240V420H100Z",
  cowlick: "M282 156C286 136 296 124 312 116C306 128 306 138 310 146C316 132 326 124 342 122C334 132 332 142 332 152Z",
  earLeft: "M222 200C204 156 186 108 184 56C220 80 262 116 292 150Z",
  earLeftIn: "M230 178C218 144 202 108 198 82C226 102 256 128 276 152Z",
  earRight: "M330 140C356 92 398 46 446 16C456 72 452 130 432 182Z",
  earRightIn: "M348 142C372 104 404 68 436 44C442 88 436 130 422 162C400 148 372 140 348 142Z",
  nose: "M114 296C114 282 134 277 147 284C156 290 153 304 141 309C128 312 114 308 114 296Z",
  noseShine: "M124 288C129 284 136 283 140 286C135 289 129 290 124 288Z",
  fang: "M223 336L233 366L246 334Z",
  lidNear: "M250 96H352V204C326 196 280 200 250 214Z",
  lidFar: "M168 150H226V222C208 216 186 220 168 230Z",
}

const STROKE = {
  rimHead: [
    "M122 288C155.1 267.5 184.5 237.3 219.9 213.2C242.9 191.5 267.4 169.1 300.4 151.9L299.6 150.1C264.6 162.9 237.1 184.5 211.8 203C179.5 230.7 144.9 256.5 122 288Z",
    "M284 152C290.9 134.6 298.8 125.4 313.3 118.3L310.7 113.7C297.2 122.6 285.1 133.4 284 152Z",
    "M312 140C320 131.2 328.2 125.2 342.3 124L341.7 120C327.8 122.8 316 128.8 312 140Z",
  ],
  rimEarRight: [
    "M444.5 16.4C456.2 74.9 449.4 130 423.6 183.2L436.4 188.8C458.6 134 463.8 73.1 447.5 15.6Z",
    "M445.2 14.8C407.5 41.2 366.5 85.1 340 134L340 134C369.5 86.9 408.5 42.8 446.8 17.2Z",
  ],
  rimEarLeft: [
    "M182.8 54C183.2 104 200.7 154.5 220 200L220 200C203.3 153.5 184.8 104 185.2 54Z",
    "M183.4 55C221.6 78.6 260.9 112.8 288 146L288 146C263.1 111.2 222.4 77.4 184.6 53Z",
  ],
  rimTail: [
    "M520 212C579.4 223.7 612.9 260.7 629.1 335.2L638.9 332.8C619.1 259.3 580.6 212.3 520 212Z",
    "M522 216C539.9 241.8 554.5 268.2 557.6 300.3L562.4 299.7C557.5 267.8 544.1 238.2 522 216Z",
  ],
  rimBody: [
    "M168 600C177.2 530.3 198.3 453.6 241.7 394.6L234.3 389.4C193.7 450.4 166.8 529.7 168 600Z",
  ],
  darkHead: [
    "M428 180C440 203.2 449.2 223.8 445.5 247.6L454.5 248.4C454.8 224.2 448 196.8 428 180Z",
    "M334 150C363.6 141.8 400.3 147.5 425.4 176.4L430.6 171.6C403.7 144.5 360.4 134.2 334 150Z",
    "M224 198C240.8 180 262.7 163.8 293.1 152.8L290.9 147.2C261.3 160.2 235.2 176 224 198Z",
  ],
  darkBody: [
    "M456 386C475.4 410.6 492.1 432.8 503.1 461.3L508.9 458.7C495.9 431.2 480.6 405.4 456 386Z",
    "M512 486C516.7 511.1 524.1 536.2 527 566.4L533 565.6C527.9 535.8 523.3 508.9 512 486Z",
  ],
  darkTail: [
    "M640 404C642 450.5 630.3 518.6 591.3 565.8L596.7 570.2C633.7 521.4 650 449.5 640 404Z",
  ],
  brows: [
    "M252 172C275.6 157 313.7 149.4 342.4 171.4L349.6 160.6C318.3 142.6 264.4 147 252 172Z",
    "M170 214C185.7 205.7 205.5 198.8 227.2 204.4L228.8 195.6C206.5 193.2 178.3 198.3 170 214Z",
  ],
  mouth: [
    "M138 316C168.6 331.7 214.2 340.1 250.4 337.4C262.4 334.4 271.8 326.6 274.8 314.3L273.2 313.7C268.2 325.4 261.6 329.6 249.4 330.6C213.8 335.9 171.4 324.3 138 316Z",
    "M270 308C277.4 312.2 282.8 316.2 284 326.4L288 325.6C285.2 315.8 278.6 307.8 270 308Z",
    "M162 330C188.5 352.1 220.1 359.4 250.1 358.2L249.9 353.8C219.9 356.6 191.5 347.9 162 330Z",
    "M214 346C238.7 360.7 269.8 367.6 299.7 372.6L300.3 367.4C270.2 364.4 241.3 355.3 214 346Z",
    "M318 372C346 374.5 372.4 369.3 396.7 362.1L395.3 357.9C371.6 366.7 346 369.5 318 372Z",
  ],
  lidLineNear: [
    "M250.7 217.3C283.3 202.5 320.9 197.3 350.6 208.3L353.4 199.7C323.1 190.7 280.7 197.5 249.3 214.7Z",
  ],
  lidLineFar: [
    "M168.6 232C187.1 221.9 205.5 218.6 225.3 223.3L226.7 216.7C206.5 213.4 184.9 218.1 167.4 230Z",
  ],
  hatchHead: [
    "M318 168C319.9 175.4 324.8 180.6 328 189L332 187C327.2 179.4 324.1 172.6 318 168Z",
    "M334 162C335.7 171.1 340.8 176.6 344 185L348 183C343.2 175.4 340.3 168.9 334 162Z",
    "M350 162C351.9 171 355.8 176.4 358.1 184.7L361.9 183.3C358.2 175.6 356.1 169 350 162Z",
    "M380 200C387 206.1 392.9 210.6 396.2 218.9L399.8 217.1C395.1 209.4 389 201.9 380 200Z",
    "M376 222C383 228.1 388.8 232.4 391.1 240.7L394.9 239.3C391.2 231.6 385 223.9 376 222Z",
  ],
  hatchTail: [
    "M586 420C597.4 416.4 606.3 411.5 616.5 410.4L615.5 405.6C605.7 408.5 594.6 411.6 586 420Z",
    "M588 450C599 448.6 608 445.5 618 446.4L618 441.6C608 442.5 597 443.4 588 450Z",
    "M582 480C592.5 480.5 599.7 479.4 609.6 482.2L610.4 477.8C600.3 476.6 591.5 475.5 582 480Z",
    "M570 380C581.3 376.2 590.3 371.4 600.4 370.2L599.6 365.8C589.7 368.6 578.7 371.8 570 380Z",
  ],
  hatchBody: [
    "M196 500C205.1 498.3 212 495.4 220 496.2L220 491.8C212 492.6 202.9 493.7 196 500Z",
    "M192 528C201.1 526.3 208 523.4 216 524.2L216 519.8C208 520.6 198.9 521.7 192 528Z",
    "M470 470C476.9 476.3 484.9 480.8 490.2 489.3L493.8 486.7C487.1 479.2 479.1 471.7 470 470Z",
    "M480 500C486.9 506.3 492.8 510.6 496 519L500 517C495.2 509.4 489.1 501.7 480 500Z",
  ],
  tuftsEarRight: [
    "M360 150C366.1 140.9 371 128.8 379.6 119.2L376.4 116.8C369 127.2 361.9 139.1 360 150Z",
    "M374 154C380.2 142.7 385 130.8 393.6 121.2L390.4 118.8C383 129.2 375.8 141.3 374 154Z",
    "M390 160C395 148.5 399 136.6 405.5 126.9L402.5 125.1C397 135.4 391 147.5 390 160Z",
  ],
  tuftsEarLeft: [
    "M236 170C236 157.7 233.1 146 233.8 134L230.2 134C230.9 146 232 158.3 236 170Z",
    "M250 168C250 155.7 248.1 144.1 249.8 132.1L246.2 131.9C245.9 143.9 246 156.3 250 168Z",
  ],
  furChest: [
    "M300 410C304.2 421.1 308.9 430.2 310.2 442.3L313.8 441.7C311.1 429.8 307.8 418.9 300 410Z",
    "M330 404C332.1 414.8 334.9 424 334.2 436L337.8 436C337.1 424 335.9 413.2 330 404Z",
    "M270 416C274.4 426.9 279.1 434.4 282.5 444.6L285.5 443.4C280.9 433.6 277.6 425.1 270 416Z",
  ],
  furCheek: [
    "M412 300C418.8 307.7 424.9 314.4 428.3 324.7L431.7 323.3C427.1 313.6 421.2 304.3 412 300Z",
    "M396 316C400.7 323.3 405 330.2 406.4 340.3L409.6 339.7C407 329.8 403.3 320.7 396 316Z",
  ],
  furTail: [
    "M590 300C594.7 307.3 599 312.2 600.4 320.4L603.6 319.6C601 311.8 597.3 304.7 590 300Z",
  ],
}

const Strokes = ({ list, fill }) => list.map((d) => <path key={d.slice(0, 24)} fill={fill} d={d} />)

const EYE_NEAR = { cx: 300, cy: 228, rx: 42, ry: 45, transform: 'rotate(-6 300 228)' }
const EYE_FAR = { cx: 200, cy: 238, rx: 20, ry: 30, transform: 'rotate(-14 200 238)' }

// part="full" draws the sitting bust with tail; part="head" draws only the head (for cameos).
export default function FoxCharacter({ className = '', part = 'full' }) {
  const uid = useId().replace(/[^\w-]/g, '')
  const id = (name) => `fox${uid}-${name}`
  const url = (name) => `url(#${id(name)})`
  const full = part === 'full'
  return <svg className={`fox-character ${className}`.trim()} viewBox={full ? '80 0 580 600' : '100 6 400 330'} fill="none" aria-hidden="true" focusable="false">
    <defs>
      <filter id={id('wobble')} x="-4%" y="-4%" width="108%" height="108%">
        <feTurbulence type="fractalNoise" baseFrequency=".04" numOctaves="2" seed="11" result="n" />
        <feDisplacementMap in="SourceGraphic" in2="n" scale="2" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      {/* Dithered grain: a gradient's alpha is thresholded against noise, like stippled ink shading. */}
      <filter id={id('stipple')} x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency=".45" numOctaves="1" seed="4" result="n" />
        <feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  1.8 0 0 0 -.4" result="na" />
        <feComposite in="SourceAlpha" in2="na" operator="arithmetic" k2="1" k3="-1" k4=".5" result="d" />
        <feComponentTransfer in="d" result="m"><feFuncA type="discrete" tableValues="0 1" /></feComponentTransfer>
        <feComposite in="SourceGraphic" in2="m" operator="in" result="c" />
        <feComponentTransfer in="c"><feFuncA type="discrete" tableValues={STEP} /></feComponentTransfer>
      </filter>
      <linearGradient id={id('down')} x1="0" y1="0" x2="0" y2="1"><stop offset=".1" stopColor={COLOR.deep} stopOpacity="0" /><stop offset="1" stopColor={COLOR.hatch} /></linearGradient>
      <linearGradient id={id('up')} x1="0" y1="1" x2="0" y2="0"><stop offset=".15" stopColor={COLOR.deep} stopOpacity="0" /><stop offset="1" stopColor={COLOR.hatch} /></linearGradient>
      <linearGradient id={id('right')} x1="0" y1="0" x2="1" y2="0"><stop offset=".2" stopColor={COLOR.deep} stopOpacity="0" /><stop offset="1" stopColor={COLOR.hatch} /></linearGradient>
      <linearGradient id={id('cream')} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={COLOR.fur} stopOpacity=".75" /><stop offset=".55" stopColor={COLOR.fur} stopOpacity="0" /></linearGradient>
      <linearGradient id={id('creamR')} x1="0" y1="0" x2="1" y2="0"><stop offset=".45" stopColor={COLOR.fur} stopOpacity="0" /><stop offset="1" stopColor={COLOR.fur} /></linearGradient>
      <clipPath id={id('eyeN')}><ellipse {...EYE_NEAR} /></clipPath>
      <clipPath id={id('eyeF')}><ellipse {...EYE_FAR} /></clipPath>
      <clipPath id={id('head')}><path d={SHAPE.head} /></clipPath>
      {full && <clipPath id={id('tail')}><path d={SHAPE.tail} /></clipPath>}
      {full && <clipPath id={id('body')}><path d={SHAPE.body} /></clipPath>}
    </defs>

    {full && <g className="fox-tail">
      <path fill={COLOR.orange} d={SHAPE.tail} />
      <g clipPath={url('tail')}>
        <path filter={url('stipple')} fill={url('right')} d="M520 190H660V600H520Z" />
        <path filter={url('stipple')} fill={url('down')} d="M460 470H660V600H460Z" />
        <path fill={COLOR.cream} d={SHAPE.tailTip} />
      </g>
      <g filter={url('wobble')}>
        <Strokes list={STROKE.hatchTail} fill={COLOR.hatch} />
        <Strokes list={STROKE.rimTail} fill={COLOR.cream} />
        <Strokes list={STROKE.furTail} fill={COLOR.fur} />
        <Strokes list={STROKE.darkTail} fill={COLOR.dark} />
      </g>
    </g>}

    {full && <g className="fox-body">
      <path fill={COLOR.orange} d={SHAPE.body} />
      <g clipPath={url('body')}>
        <path filter={url('stipple')} fill={url('down')} d="M140 420H560V600H140Z" />
        <path fill={COLOR.cream} d={SHAPE.chest} />
        <path filter={url('stipple')} fill={url('cream')} d="M210 340H460V450H210Z" />
      </g>
      <g filter={url('wobble')}>
        <Strokes list={STROKE.hatchBody} fill={COLOR.hatch} />
        <Strokes list={STROKE.furChest} fill={COLOR.fur} />
        <Strokes list={STROKE.rimBody} fill={COLOR.cream} />
        <Strokes list={STROKE.darkBody} fill={COLOR.dark} />
      </g>
    </g>}

    <g className="fox-head">
      <g className="fox-ear fox-ear-left"><g className="fox-ear-flick">
        <path fill={COLOR.orange} d={SHAPE.earLeft} />
        <path fill={COLOR.dark} d={SHAPE.earLeftIn} />
        <g filter={url('wobble')}>
          <Strokes list={STROKE.tuftsEarLeft} fill={COLOR.cream} />
          <Strokes list={STROKE.rimEarLeft} fill={COLOR.cream} />
        </g>
      </g></g>
      <g className="fox-ear fox-ear-right"><g className="fox-ear-flick">
        <path fill={COLOR.orange} d={SHAPE.earRight} />
        <path fill={COLOR.dark} d={SHAPE.earRightIn} />
        <g filter={url('wobble')}>
          <Strokes list={STROKE.tuftsEarRight} fill={COLOR.cream} />
          <Strokes list={STROKE.rimEarRight} fill={COLOR.cream} />
        </g>
      </g></g>

      <path fill={COLOR.orange} d={SHAPE.head} />
      <path fill={COLOR.orange} d={SHAPE.cowlick} />
      <g clipPath={url('head')}>
        <path filter={url('stipple')} fill={url('up')} d="M250 130H470V250H250Z" />
        <path fill={COLOR.cream} d={SHAPE.muzzle} />
        <path filter={url('stipple')} fill={url('creamR')} d="M300 240H500V380H300Z" />
      </g>
      <g filter={url('wobble')}>
        <Strokes list={STROKE.hatchHead} fill={COLOR.hatch} />
        <Strokes list={STROKE.furCheek} fill={COLOR.fur} />
        <Strokes list={STROKE.rimHead} fill={COLOR.cream} />
        <Strokes list={STROKE.darkHead} fill={COLOR.dark} />
        <Strokes list={STROKE.mouth} fill={COLOR.ink} />
        <path fill={COLOR.ink} d={SHAPE.nose} />
        <path fill={COLOR.cream} d={SHAPE.noseShine} />
        <path fill={COLOR.cream} stroke={COLOR.ink} strokeWidth="2.6" strokeLinejoin="round" d={SHAPE.fang} />
        <circle cx="158" cy="322" r="2.2" fill={COLOR.ink} /><circle cx="171" cy="320" r="2.2" fill={COLOR.ink} /><circle cx="166" cy="329" r="2.2" fill={COLOR.ink} />
      </g>

      <g className="fox-eye fox-eye-near">
        <ellipse {...EYE_NEAR} fill={COLOR.cream} />
        <g clipPath={url('eyeN')}>
          <g className="fox-pupil fox-pupil-near"><circle cx="300" cy="230" r="18" fill={COLOR.pupil} /><circle cx="294" cy="223" r="5.5" fill={COLOR.cream} /><circle cx="307" cy="238" r="2" fill={COLOR.cream} /></g>
          <g className="fox-lid"><g className="fox-lid-blink">
            <path fill={COLOR.orange} d={SHAPE.lidNear} />
            <Strokes list={STROKE.lidLineNear} fill={COLOR.ink} />
          </g></g>
        </g>
        <ellipse {...EYE_NEAR} stroke={COLOR.ink} strokeWidth="5.5" />
      </g>
      <g className="fox-eye fox-eye-far">
        <ellipse {...EYE_FAR} fill={COLOR.cream} />
        <g clipPath={url('eyeF')}>
          <g className="fox-pupil fox-pupil-far"><circle cx="200" cy="240" r="11" fill={COLOR.pupil} /><circle cx="196" cy="235" r="3.2" fill={COLOR.cream} /></g>
          <g className="fox-lid"><g className="fox-lid-blink">
            <path fill={COLOR.orange} d={SHAPE.lidFar} />
            <Strokes list={STROKE.lidLineFar} fill={COLOR.ink} />
          </g></g>
        </g>
        <ellipse {...EYE_FAR} stroke={COLOR.ink} strokeWidth="4.2" />
      </g>
      <g className="fox-brows"><Strokes list={STROKE.brows} fill={COLOR.ink} /></g>
    </g>
  </svg>
}
