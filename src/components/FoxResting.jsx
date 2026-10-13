import { useRef } from 'react'
import useFoxLife from '../hooks/useFoxLife'
import { REST } from './inkArt'
import { INK } from './inkPalette'

// Footer cameo: the fox at rest in a few cream brush strokes; back and tail close round
// like an enso. It breathes slowly, and the loop pauses while the footer is off screen.
export default function FoxResting({ className = '' }) {
  const ref = useRef(null)
  useFoxLife(ref)
  return <div className={`fox-cameo ${className}`.trim()} ref={ref} aria-hidden="true">
    <svg viewBox="0 0 240 150" focusable="false">
      <g className="fox-rest-breath">
        <path fill={INK.cream} opacity=".07" d={REST.wash} />
        <path fill={INK.cream} d={REST.cream} />
        <path fill={INK.verm} d={REST.red} />
      </g>
    </svg>
  </div>
}
