import { useId } from 'react'

// Deep-orange wavy edge the fox peeks from behind (hero), with a brush rim and stippled shading.
const COLOR = { orange: '#f3732d', cream: '#f5f0eb', deep: '#d84a12', hatch: '#a8360c', shade: '#7e2708' }
// Alpha step table: any dithered coverage above 5% becomes fully opaque ink.
const STEP = '0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1'

const SHAPE = {
  fill: "M0 140C18 128 30 96 60 80C90 64 116 72 146 70C184 68 204 44 244 36C284 28 306 26 344 30C384 34 402 58 444 58C482 58 506 36 540 44C570 52 586 96 600 140Z",
}

const STROKE = {
  rim: [
    "M0 140C19.7 130.5 30.8 97.4 61.2 82.3C91.4 66.7 116.2 75.2 146.2 73.4C184.2 71.1 204.6 46.8 244.4 38.2C284.6 31 305.6 29.4 343.6 34C383.6 37.6 402 61.3 444 60.6C482 60.9 505.3 38.9 539.3 46.9C569.5 53.8 582.7 97 600 140L600 140C589.3 95 570.5 50.2 540.8 41.1C506.7 33.1 482 55.1 444 55.4C402 54.7 384.4 30.4 344.4 26C306.4 22.6 283.4 25 243.6 33.8C203.4 41.2 183.8 64.9 145.8 66.6C115.8 68.8 88.6 61.3 58.8 77.7C29.2 94.6 16.3 125.5 0 140Z",
  ],
  hatch: [
    "M86 104C96.8 101.9 106 99.1 116 99.8L116 96.2C106 96.9 95.2 98.1 86 104Z",
    "M300 64C312.7 62 323.9 59.1 335.9 60.8L336.1 57.2C324.1 56.9 311.3 58 300 64Z",
    "M478 92C488.8 89.9 498 87.1 508 87.8L508 84.2C498 84.9 487.2 86.1 478 92Z",
    "M200 96C210.7 93.7 220 91 230 91.6L230 88.4C220 89 209.3 90.3 200 96Z",
  ],
}

const Strokes = ({ list, fill }) => list.map((d) => <path key={d.slice(0, 24)} fill={fill} d={d} />)

export default function FoxWave({ className = '' }) {
  const uid = useId().replace(/[^\w-]/g, '')
  const id = (name) => `wave${uid}-${name}`
  const url = (name) => `url(#${id(name)})`
  return <svg className={`fox-wave ${className}`.trim()} viewBox="0 14 600 126" fill="none" aria-hidden="true" focusable="false">
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
      <linearGradient id={id('down')} x1="0" y1="0" x2="0" y2="1"><stop offset=".2" stopColor={COLOR.shade} stopOpacity="0" /><stop offset="1" stopColor={COLOR.shade} /></linearGradient>
    </defs>
    <path fill={COLOR.deep} d={SHAPE.fill} />
    <path filter={url('stipple')} fill={url('down')} d={SHAPE.fill} />
    <g filter={url('wobble')}>
      <Strokes list={STROKE.hatch} fill={COLOR.hatch} />
      <Strokes list={STROKE.rim} fill={COLOR.cream} />
    </g>
  </svg>
}
