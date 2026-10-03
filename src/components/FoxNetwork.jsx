import { useEffect, useRef, useState } from 'react'

const anchors = [
  [123, 155], [178, 44], [231, 137], [280, 111], [329, 137], [382, 44], [437, 155],
  [453, 275], [389, 379], [280, 506], [171, 379], [107, 275],
  [280, 239], [204, 284], [356, 284], [280, 395], [280, 334],
]

const edges = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [0, 11], [6, 7],
  [11, 10], [7, 8], [10, 9], [8, 9], [0, 2], [2, 12], [3, 12], [4, 12],
  [0, 13], [11, 13], [2, 13], [12, 13], [12, 14], [4, 14], [6, 14], [7, 14],
  [13, 16], [14, 16], [12, 16], [16, 15], [13, 10], [14, 8], [10, 15], [8, 15], [15, 9],
]

function positions(time) {
  return anchors.map(([x, y], index) => {
    const scale = index === 9 ? 1.5 : index < 7 ? 3.2 : 4.5
    return [
      x + Math.sin(time * (0.48 + index % 4 * 0.09) + index * 1.8) * scale,
      y + Math.cos(time * (0.42 + index % 3 * 0.11) + index * 1.3) * scale,
    ]
  })
}

export default function FoxNetwork() {
  const svgRef = useRef(null)
  const [points, setPoints] = useState(() => positions(0))

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame
    let last = 0
    let visible = true
    const stop = () => {
      if (frame) cancelAnimationFrame(frame)
      frame = undefined
    }
    const start = () => {
      if (!frame && visible && !media.matches) frame = requestAnimationFrame(tick)
    }
    const tick = (now) => {
      frame = undefined
      if (now - last > 33) {
        setPoints(positions(now / 1000))
        last = now
      }
      start()
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) start()
      else stop()
    })
    observer.observe(svgRef.current)
    const onMotionChange = () => {
      if (media.matches) stop()
      else start()
    }
    media.addEventListener('change', onMotionChange)
    start()
    return () => {
      stop()
      observer.disconnect()
      media.removeEventListener('change', onMotionChange)
    }
  }, [])

  return <svg ref={svgRef} className="fox-network" viewBox="0 0 560 560" fill="none" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="fox-fill" x1="115" y1="50" x2="440" y2="500" gradientUnits="userSpaceOnUse"><stop stopColor="#F27427" stopOpacity=".3" /><stop offset=".5" stopColor="#C34212" stopOpacity=".12" /><stop offset="1" stopColor="#F27427" stopOpacity=".03" /></linearGradient>
      <linearGradient id="fox-stroke" x1="140" y1="40" x2="440" y2="500" gradientUnits="userSpaceOnUse"><stop stopColor="#FFAE75" /><stop offset=".48" stopColor="#F56A22" /><stop offset="1" stopColor="#8F3716" /></linearGradient>
      <radialGradient id="fox-aura"><stop stopColor="#F56A22" stopOpacity=".22" /><stop offset="1" stopColor="#F56A22" stopOpacity="0" /></radialGradient>
    </defs>
    <ellipse cx="280" cy="280" rx="275" ry="260" fill="url(#fox-aura)" />
    <path d="M123 155 178 44 231 137 280 111 329 137 382 44 437 155 453 275 389 379 280 506 171 379 107 275 123 155Z" fill="url(#fox-fill)" stroke="url(#fox-stroke)" strokeWidth="2.2" />
    <path d="m123 155 55-111 53 93-108 18Zm314 0L382 44l-53 93 108 18Z" fill="#F56A22" fillOpacity=".16" />
    {edges.map(([a, b]) => <line key={`${a}-${b}`} x1={points[a][0]} y1={points[a][1]} x2={points[b][0]} y2={points[b][1]} stroke="#F58845" strokeOpacity={a < 12 && b < 12 ? '.35' : '.24'} strokeWidth="1" />)}
    <path className="fox-signal" d={`M${points[1][0]} ${points[1][1]} L${points[2][0]} ${points[2][1]} L${points[12][0]} ${points[12][1]} L${points[14][0]} ${points[14][1]} L${points[8][0]} ${points[8][1]} L${points[9][0]} ${points[9][1]}`} stroke="#FFAF73" strokeWidth="2" strokeLinecap="round" />
    <path d="m190 279 38 15-32 9-6-24Zm180 0-38 15 32 9 6-24Z" fill="#FF9B55" fillOpacity=".78" />
    <path d="m261 394 19 17 19-17h-38Z" fill="#FFB073" />
    {points.map(([x, y], index) => <g key={index}><circle cx={x} cy={y} r={index === 9 || index === 12 ? 7 : 4.5} fill="#F56A22" fillOpacity=".15" /><circle cx={x} cy={y} r={index === 9 || index === 12 ? 3 : 2} fill="#FFAD70" /></g>)}
  </svg>
}
