import { useId } from 'react'
import { BODY, TAIL, LEGS, CONTOURS, MARKS, FUR, CURLS, SPIRAL, PLUMES, CLOUD, RIBBONS, FLAME_LINES, FLAME_LIGHT } from './scrollArt'

const colors = { ink: '#16110d', red: '#c8202a', orange: '#d96325', gold: '#be8b38', shadow: '#8e7d61' }

function Strokes({ paths }) {
  return paths.map(({ d, color }, index) => <path key={index} d={d} fill={colors[color]} />)
}

export default function FoxInk() {
  const id = `scroll-${useId().replace(/[^\w-]/g, '')}`
  return <svg className="scroll-art" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
    <defs>
      <filter id={`${id}-dry`} x="-2%" y="-3%" width="104%" height="106%" colorInterpolationFilters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency=".045 .32" numOctaves="3" seed="13" result="grain" />
        <feDisplacementMap in="SourceGraphic" in2="grain" scale="1.6" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      <filter id={`${id}-mask-grain`}>
        <feTurbulence type="fractalNoise" baseFrequency=".12 .7" numOctaves="2" seed="17" />
        <feColorMatrix type="luminanceToAlpha" />
        <feComponentTransfer><feFuncA type="table" tableValues=".2 .85 1 1" /></feComponentTransfer>
      </filter>
      <mask id={`${id}-bristles`} style={{ maskType: 'alpha' }}><rect width="1440" height="900" fill="white" filter={`url(#${id}-mask-grain)`} /></mask>
      <filter id={`${id}-bleed`} x="-4%" y="-5%" width="108%" height="110%"><feGaussianBlur stdDeviation="1.15" /></filter>
      <radialGradient id={`${id}-sun`}><stop stopColor="#bc222b" /><stop offset=".85" stopColor="#c8202a" /><stop offset="1" stopColor="#c8202a" stopOpacity=".75" /></radialGradient>
    </defs>
    <g className="scroll-sky" fill="none">
      <path d="M1092 119C1176 118 1245 184 1237 270C1242 352 1172 414 1090 413C1003 420 938 344 943 267C938 182 1006 113 1092 119Z" fill={`url(#${id}-sun)`} opacity=".88" mask={`url(#${id}-bristles)`} filter={`url(#${id}-dry)`} />
      <circle cx="1090" cy="266" r="153" stroke="#c8202a" strokeWidth="1" opacity=".25" strokeDasharray="260 40 80 50" />
      <g className="scroll-clouds" fill="#827559" opacity=".36">
        <path d={CLOUD} transform="translate(82 143) scale(1.25)" />
        <path d={CLOUD} transform="translate(1000 589) scale(1.4)" />
        <path d={CLOUD} transform="translate(380 812) scale(.8)" />
      </g>
      <g stroke="#85765a" opacity=".12" strokeWidth="1"><path d="M0 226H270M1144 176H1440M0 640H170M1200 659H1440M0 804H310" /><path d="M0 231H240M1180 181H1440M0 645H120M1230 665H1440" /></g>
    </g>
    <g className="scroll-creature" filter={`url(#${id}-dry)`}>
      <g className="scroll-plumes" mask={`url(#${id}-bristles)`}>
        {PLUMES.map(({ d, color }) => <path key={d} d={d} fill={colors[color]} />)}
        <Strokes paths={FLAME_LIGHT} /><Strokes paths={FLAME_LINES} />
      </g>
      <g className="scroll-tail"><path d={TAIL} fill="#f6efdf" /></g>
      <g fill="#e9dfcb">{LEGS.slice(0, 2).map(d => <path key={d} d={d} />)}</g>
      <path d={BODY} fill="#f6efdf" />
      <g fill="#f6efdf">{LEGS.slice(2).map(d => <path key={d} d={d} />)}</g>
      <g opacity=".16" filter={`url(#${id}-bleed)`}><Strokes paths={CONTOURS} /></g>
      <g className="scroll-contours" mask={`url(#${id}-bristles)`}>
        <Strokes paths={CONTOURS} /><Strokes paths={FUR} /><Strokes paths={MARKS} />
        {CURLS.map(({ x, y, scale, rotate }) => <path key={x} d={SPIRAL} fill={colors.ink} transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`} />)}
      </g>
      <g fill="#16110d" opacity=".65"><path d="m469 320 15-10-5 15 16-8-6 16 14-5-9 13Z" /><path d="m1001 275 11-6-7 12 13-6-8 12 12-3-15 10Z" /></g>
    </g>
    <g className="scroll-ribbons" filter={`url(#${id}-dry)`} mask={`url(#${id}-bristles)`}>{RIBBONS.map(({ d, color }, index) => <path key={index} className={`scroll-ribbon scroll-ribbon-${index}`} d={d} fill={colors[color]} />)}</g>
    <g className="scroll-seal" transform="translate(1263 604) rotate(-5)" fill="#c8202a">
      <path d="M0 0 52 2 50 56 2 54Z" fill="none" stroke="currentColor" strokeWidth="3" />
      <text x="26" y="40" textAnchor="middle" fontSize="35" fontFamily="'Shippori Mincho', serif">狐</text>
    </g>
  </svg>
}
