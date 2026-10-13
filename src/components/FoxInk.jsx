import { useId } from 'react'
import { FOX, TAIL, PLUMES, SKY } from './inkArt'
import { InkFilters, InkBody } from './inkKit'
import { INK } from './inkPalette'

// Hero artwork: a seated guardian fox in sumi-e ink under a brushed sun, kumo clouds and a
// Hokusai crest. Each layer is its own SVG so idle motion (cloud drift, tail and plume flow)
// moves composited layers instead of re-running the paint filters.
const VIEW = '330 20 880 880'
const BOX = { x: 330, y: 20, width: 880, height: 880 }

// Paint-in: wide soft brush sweeps that follow the strokes' direction (head, back, chest, haunch, tail).
const BODY_WIPES = [
  { d: 'M400 240C470 170 560 110 700 110', w: 300, t: 560, at: 0 },
  { d: 'M640 200C720 330 820 470 850 720', w: 250, t: 700, at: 180 },
  { d: 'M560 300C556 480 570 640 590 840', w: 200, t: 640, at: 300 },
  { d: 'M720 520C780 640 770 760 620 820', w: 220, t: 560, at: 520 },
]
const TAIL_WIPES = [{ d: 'M800 760C930 820 1060 720 1020 600C990 500 1060 420 1180 360', w: 190, t: 760, at: 620 }]

function Wipes({ id, wipes }) {
  return <>
    <filter id={`${id}-soft`} x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="9" /></filter>
    <mask id={id} maskUnits="userSpaceOnUse" {...BOX}>
      <g filter={`url(#${id}-soft)`}>
        {wipes.map(({ d, w, t, at }) => <path key={d} className="ink-wipe" d={d} pathLength="1" fill="none" stroke="#fff" strokeWidth={w} style={{ '--t': `${t}ms`, '--d': `${at}ms` }} />)}
      </g>
      <rect className="ink-wipe-settle" {...BOX} fill="#fff" />
    </mask>
  </>
}

function Sky({ id }) {
  const s = SKY.seal
  return <svg className="ink-layer ink-sky" viewBox={VIEW} aria-hidden="true" focusable="false">
    <defs>
      {/* Washi: fine fibres modulated by a slow cloudiness, faded out toward the edges. */}
      <filter id={`${id}-washi`} x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="3" seed="21" result="f" />
        <feTurbulence type="fractalNoise" baseFrequency=".012" numOctaves="2" seed="22" result="c" />
        <feComposite in="f" in2="c" operator="arithmetic" k2=".7" k3=".5" k4="-.3" />
        <feColorMatrix type="matrix" values="0 0 0 0 .96  0 0 0 0 .93  0 0 0 0 .89  0 0 0 .22 -.06" />
      </filter>
      <radialGradient id={`${id}-fade`}><stop offset=".55" stopColor="#fff" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></radialGradient>
      <mask id={`${id}-edge`} maskUnits="userSpaceOnUse" {...BOX}><rect {...BOX} fill={`url(#${id}-fade)`} /></mask>
      {/* Sun: a disc laid in with a broad brush; streaks open up toward the rim. */}
      <radialGradient id={`${id}-sunfade`}><stop offset=".72" /><stop offset="1" stopOpacity=".62" /></radialGradient>
      <filter id={`${id}-sun`} x="-10%" y="-10%" width="120%" height="120%" colorInterpolationFilters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency=".012 .03" numOctaves="3" seed="8" result="n" />
        <feDisplacementMap in="SourceAlpha" in2="n" scale="16" xChannelSelector="R" yChannelSelector="G" result="d" />
        <feTurbulence type="fractalNoise" baseFrequency=".006 .16" numOctaves="3" seed="4" result="s" />
        <feColorMatrix in="s" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  1 0 0 0 0" result="sa" />
        <feComposite in="d" in2="sa" operator="arithmetic" k2="1.3" k3="-.9" k4=".08" result="m" />
        <feComponentTransfer in="m" result="mt"><feFuncA type="discrete" tableValues="0 1" /></feComponentTransfer>
        <feTurbulence type="fractalNoise" baseFrequency=".03" numOctaves="3" seed="9" result="mo" />
        <feColorMatrix in="mo" type="matrix" values="0 0 0 0 .62  0 0 0 0 .1  0 0 0 0 .12  0 0 0 0 1" result="base" />
        <feColorMatrix in="mo" type="matrix" values="0 0 0 0 .78  0 0 0 0 .16  0 0 0 0 .14  1.4 0 0 0 -.5" result="hi" />
        <feMerge result="col"><feMergeNode in="base" /><feMergeNode in="hi" /></feMerge>
        <feComposite in="col" in2="mt" operator="in" />
      </filter>
      <filter id={`${id}-seal`} x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence type="fractalNoise" baseFrequency=".09" numOctaves="2" seed="5" result="n" />
        <feDisplacementMap in="SourceGraphic" in2="n" scale="5" xChannelSelector="R" yChannelSelector="G" result="d" />
        <feTurbulence type="fractalNoise" baseFrequency=".5" numOctaves="1" seed="6" result="s" />
        <feColorMatrix in="s" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 -4 0 3.1" result="sa" />
        <feComposite in="d" in2="sa" operator="in" />
      </filter>
      <mask id={`${id}-cut`} maskUnits="userSpaceOnUse" x={s.x - 6} y={s.y - 6} width={s.size + 12} height={s.size + 12}>
        <rect x={s.x - 6} y={s.y - 6} width={s.size + 12} height={s.size + 12} fill="#fff" />
        <path d={s.glyph} transform={s.transform} fill="#000" />
      </mask>
      <InkFilters id={id} />
    </defs>
    <rect {...BOX} filter={`url(#${id}-washi)`} mask={`url(#${id}-edge)`} />
    <circle className="ink-sun" cx="560" cy="250" r="196" fill={`url(#${id}-sunfade)`} filter={`url(#${id}-sun)`} />
    <g className="ink-sea">
      <g opacity=".3" fill="none" stroke={INK.cream} strokeWidth="1.6"><path d={SKY.scales} /></g>
      <path opacity=".7" fill={INK.cream} d={SKY.waveLines} />
      <path opacity=".8" fill={INK.cream} d={SKY.waveFoam} />
      <path opacity=".85" fill={INK.cream} filter={`url(#${id}-dry)`} d={SKY.ground} />
    </g>
    <g transform={`rotate(-2 ${s.x + s.size / 2} ${s.y + s.size / 2})`} filter={`url(#${id}-seal)`}>
      <rect x={s.x} y={s.y} width={s.size} height={s.size} rx="4" fill={INK.verm} mask={`url(#${id}-cut)`} />
    </g>
  </svg>
}

export default function FoxInk() {
  const id = `ink${useId().replace(/[^\w-]/g, '')}`
  return <div className="ink-stage">
    <Sky id={`${id}s`} />
    <svg className="ink-layer ink-clouds" viewBox={VIEW} aria-hidden="true" focusable="false">
      {SKY.clouds.map((c, i) => <g key={c.fill.slice(0, 24)} className="ink-cloud" style={{ '--i': i }}>
        <path fill="#1a1411" d={c.fill} />
        <path fill={INK.cream} opacity={[0.62, 0.55, 0.5][i]} d={c.lines} />
      </g>)}
    </svg>
    <svg className="ink-layer ink-plumes" viewBox={VIEW} aria-hidden="true" focusable="false">
      {PLUMES.map(([r, o, g], i) => <g key={r.slice(0, 24)} className="ink-plume" style={{ '--i': i }}>
        <g className="ink-plume-flow">
          <path fill={INK.crimson} d={r} /><path fill={INK.orange} d={o} /><path fill={INK.gold} d={g} />
        </g>
      </g>)}
    </svg>
    <svg className="ink-layer ink-tail" viewBox={VIEW} aria-hidden="true" focusable="false">
      <defs><InkFilters id={`${id}t`} /><Wipes id={`${id}tw`} wipes={TAIL_WIPES} /></defs>
      <InkBody id={`${id}t`} part={TAIL} box={BOX} mask={`${id}tw`} />
    </svg>
    <svg className="ink-layer ink-body" viewBox={VIEW} aria-hidden="true" focusable="false">
      <defs><InkFilters id={`${id}b`} /><Wipes id={`${id}bw`} wipes={BODY_WIPES} /></defs>
      <InkBody id={`${id}b`} part={FOX} box={BOX} mask={`${id}bw`} />
    </svg>
    {/* Drifting embers: a few specks of vermilion and gold rising past the fox. */}
    <span className="ink-ember" style={{ '--x': '22%', '--y': '58%', '--d': '0s', '--s': '17s' }} />
    <span className="ink-ember is-gold" style={{ '--x': '78%', '--y': '40%', '--d': '-6s', '--s': '21s' }} />
    <span className="ink-ember" style={{ '--x': '64%', '--y': '70%', '--d': '-11s', '--s': '19s' }} />
    <span className="ink-ember is-gold" style={{ '--x': '36%', '--y': '30%', '--d': '-3s', '--s': '23s' }} />
  </div>
}
