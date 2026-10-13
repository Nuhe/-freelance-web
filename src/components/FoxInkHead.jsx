import { useId } from 'react'
import { ENSO, FOX } from './inkArt'
import { InkFilters, InkBody } from './inkKit'
import { INK } from './inkPalette'

// Casos cameo: the hero fox's head inside a round vermilion seal, ringed by a dry-brush enso.
// It reuses the hero drawing through a cropped viewBox, so it adds no path data.
const BOX = { x: 410, y: 40, width: 320, height: 320 }

export default function FoxInkHead({ className = '' }) {
  const id = `inkh${useId().replace(/[^\w-]/g, '')}`
  return <div className={className} aria-hidden="true">
    <svg viewBox="410 40 320 320" focusable="false">
      <defs>
        <InkFilters id={id} />
        <clipPath id={`${id}-disc`}><circle cx="572" cy="204" r="140" /></clipPath>
      </defs>
      <g clipPath={`url(#${id}-disc)`}>
        <circle cx="572" cy="204" r="140" fill={INK.verm} />
        <InkBody id={id} part={FOX} box={BOX} />
      </g>
      <path fill={INK.cream} opacity=".8" d={ENSO} filter={`url(#${id}-dry)`} />
    </svg>
  </div>
}
