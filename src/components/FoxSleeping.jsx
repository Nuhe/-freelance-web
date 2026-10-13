import { useId } from 'react'

// Footer cameo: the mascot asleep, curled up in its tail. Same brush-stroke technique as FoxCharacter.
const COLOR = { orange: '#f3732d', cream: '#f5f0eb', ink: '#140a06', dark: '#2a120a', deep: '#d84a12', hatch: '#a8360c' }
// Alpha step table: any dithered coverage above 5% becomes fully opaque ink.
const STEP = '0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1'

const SHAPE = {
  body: "M60 118C52 84 86 52 134 50C184 48 222 78 220 116C219 124 214 128 206 128H70C64 128 61 124 60 118Z",
  earBack: "M76 80C76 64 84 54 96 46C97 60 93 70 87 80Z",
  ear: "M88 82C92 64 104 50 122 42C120 58 114 74 104 86Z",
  earIn: "M96 80C100 68 108 58 118 50C116 62 111 72 104 80Z",
  head: "M14 106C22 92 44 76 74 74C102 72 122 86 124 102C125 116 112 124 92 124H40C24 122 12 116 14 106Z",
  muzzle: "M0 108C24 110 50 114 80 120V150H0Z",
  nose: "M8 106C8 100 16 98 21 101C24 104 22 110 17 111C12 112 8 110 8 106Z",
  tail: "M218 104C232 128 206 142 150 144C100 146 50 144 22 134C10 130 6 122 14 116C40 124 80 126 120 124C170 122 200 116 218 104Z",
  tailTip: "M0 100H66L60 112L68 118L60 126L68 134L60 146H0Z",
}

const STROKE = {
  rim: [
    "M112 60C132 53.6 159.3 50.2 184.9 59.4L187.1 52.6C160.7 45.8 128 46.4 112 60Z",
    "M186 56C205 68.1 218.7 88 218 112L222 112C221.3 88 207 63.9 186 56Z",
    "M16 100C32.1 88.1 50.1 77.6 74.2 76.6L73.8 71.4C49.9 74.4 27.9 83.9 16 100Z",
    "M90 80C97.7 64.6 106.5 52.9 122.8 43.4L121.2 40.6C105.5 51.1 94.3 63.4 90 80Z",
    "M22 132C59.5 142.5 110.1 145.4 160.1 144.2L159.9 139.8C109.9 142.6 60.5 137.5 22 132Z",
  ],
  dark: [
    "M110 120C149.9 124.5 186.5 119.3 214.9 108L213.1 104C185.5 116.7 150.1 119.5 110 120Z",
    "M222 112C221 128.4 209.8 138.4 179.7 141.4L180.3 146.6C210.2 141.6 227 127.6 222 112Z",
    "M96 84C106.4 84 115 86.6 120.5 96.9L123.5 95.1C117 85.4 105.6 80 96 84Z",
  ],
  ink: [
    "M52 92C55.9 100.8 69 100.1 77.6 93.8L74.4 90.2C67 97.9 60.1 97.2 52 92Z",
    "M48 90C51.1 87.8 53.2 85.7 56.4 85.1L55.6 82.9C52.8 84.3 48.9 86.2 48 90Z",
  ],
  hatch: [
    "M150 70C154.5 77.5 158.9 82.3 160.3 90.4L163.7 89.6C161.1 81.7 157.5 74.5 150 70Z",
    "M166 68C170.5 75.5 174.9 80.3 176.3 88.4L179.7 87.6C177.1 79.7 173.5 72.5 166 68Z",
    "M182 72C186.7 79.3 190 84.1 190.4 92.2L193.6 91.8C192 83.9 189.3 76.7 182 72Z",
    "M130 74C133.6 81.2 137 86.1 137.4 94.2L140.6 93.8C139 85.9 136.4 78.8 130 74Z",
  ],
}

const Strokes = ({ list, fill }) => list.map((d) => <path key={d.slice(0, 24)} fill={fill} d={d} />)

export default function FoxSleeping({ className = '' }) {
  const uid = useId().replace(/[^\w-]/g, '')
  const id = (name) => `fox${uid}-${name}`
  const url = (name) => `url(#${id(name)})`
  return <svg className={`fox-sleeping ${className}`.trim()} viewBox="0 36 232 114" fill="none" aria-hidden="true" focusable="false">
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
      <linearGradient id={id('down')} x1="0" y1="0" x2="0" y2="1"><stop offset=".2" stopColor={COLOR.deep} stopOpacity="0" /><stop offset="1" stopColor={COLOR.hatch} /></linearGradient>
      <clipPath id={id('head')}><path d={SHAPE.head} /></clipPath>
      <clipPath id={id('tail')}><path d={SHAPE.tail} /></clipPath>
    </defs>
    <g className="fox-sleeping-breath">
      <path fill={COLOR.orange} d={SHAPE.body} />
      <path fill={COLOR.orange} d={SHAPE.earBack} />
      <path fill={COLOR.orange} d={SHAPE.ear} />
      <path fill={COLOR.dark} d={SHAPE.earIn} />
      <path filter={url('stipple')} fill={url('down')} d={SHAPE.body} />
      <path fill={COLOR.orange} d={SHAPE.head} />
      <g clipPath={url('head')}><path fill={COLOR.cream} d={SHAPE.muzzle} /></g>
      <path fill={COLOR.orange} d={SHAPE.tail} />
      <g clipPath={url('tail')}><path fill={COLOR.cream} d={SHAPE.tailTip} /></g>
      <g filter={url('wobble')}>
        <Strokes list={STROKE.hatch} fill={COLOR.hatch} />
        <Strokes list={STROKE.rim} fill={COLOR.cream} />
        <Strokes list={STROKE.dark} fill={COLOR.dark} />
        <Strokes list={STROKE.ink} fill={COLOR.ink} />
        <path fill={COLOR.ink} d={SHAPE.nose} />
      </g>
    </g>
  </svg>
}
