// Shared sumi-e toolkit: SVG filters and the layered "painted animal" renderer.
// Ids are prefixed with a useId-derived key so several drawings can share a page.

import { INK } from './inkPalette'

// dry: erodes stroke edges and thin tails against fine noise (dry brush).
// rim: a slightly ragged cream halo so dark ink keeps a paper edge on the dark page.
// wash: soft grey modelling. grain: paper tooth inside the cream fill.
export function InkFilters({ id }) {
  return <>
    <filter id={`${id}-dry`} x="-5%" y="-5%" width="110%" height="110%" colorInterpolationFilters="sRGB">
      <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b" />
      <feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="7" result="n" />
      <feColorMatrix in="n" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0" result="na" />
      <feComposite in="b" in2="na" operator="arithmetic" k2="1.1" k3="-1" k4=".42" result="m" />
      <feComponentTransfer in="m" result="mt"><feFuncA type="discrete" tableValues="0 1" /></feComponentTransfer>
      <feComposite in="SourceGraphic" in2="mt" operator="in" />
    </filter>
    <filter id={`${id}-rim`} x="-5%" y="-5%" width="110%" height="110%">
      <feMorphology in="SourceAlpha" operator="dilate" radius="3.5" result="d" />
      <feTurbulence type="fractalNoise" baseFrequency=".05" numOctaves="2" seed="3" result="n" />
      <feDisplacementMap in="d" in2="n" scale="3" xChannelSelector="R" yChannelSelector="G" result="dd" />
      <feFlood floodColor={INK.cream} /><feComposite in2="dd" operator="in" />
    </filter>
    <filter id={`${id}-wash`} x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="10" /></filter>
    <filter id={`${id}-grain`} x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency=".7" numOctaves="3" seed="12" />
      <feColorMatrix type="matrix" values="0 0 0 0 .35  0 0 0 0 .27  0 0 0 0 .2  0 0 -1.4 0 .9" />
    </filter>
  </>
}

// One painted mass: cream rim, cream fill, grey wash, paper grain, then grey/crimson/ink strokes.
// part: { sil: string | string[], ears?: string[], shade: string[], grey, red, ink }
// Ears skip the rim: dilating their needle tips smears them.
export function InkBody({ id, part, box, mask }) {
  const sil = [].concat(part.sil)
  const all = [...sil, ...(part.ears || [])]
  const clip = `${id}-clip`
  return <g mask={mask ? `url(#${mask})` : undefined}>
    <clipPath id={clip}>{all.map((d) => <path key={d.slice(0, 32)} d={d} />)}</clipPath>
    <g filter={`url(#${id}-rim)`}>{sil.map((d) => <path key={d.slice(0, 32)} d={d} />)}</g>
    <g fill={INK.cream}>{all.map((d) => <path key={d.slice(0, 32)} d={d} />)}</g>
    <g clipPath={`url(#${clip})`} filter={`url(#${id}-wash)`} fill={INK.shade}>{part.shade.map((d) => <path key={d.slice(0, 32)} d={d} />)}</g>
    <rect {...box} filter={`url(#${id}-grain)`} clipPath={`url(#${clip})`} opacity=".5" />
    <g filter={`url(#${id}-dry)`}>
      <path fill={INK.grey} d={part.grey} />
      <path fill={INK.crimson} d={part.red} />
      <path fill={INK.ink} d={part.ink} />
    </g>
  </g>
}
