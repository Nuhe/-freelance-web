import { useEffect, useRef } from 'react'

const DRY_TIME = 8000
const MAX_SEGMENTS = 1400
const GHOST_ALPHA = .035
const midpoint = (a, b) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 })

// A small retained painting lets drying be time-based rather than frame-rate-based.
// Old ink settles to a faint ghost; once the newest stroke dries, no frame is needed.
export default function InkTrail({ heroRef, onFirstStroke }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!hero || !ctx) return undefined

    let segments = []
    let previous = null
    let middle = null
    let width = .5
    let frame = 0
    let visible = true
    let intersecting = true
    let pausedAt = null
    let pausedTotal = 0
    let lastMove = -Infinity
    let lastPaint = 0
    let pooled = false
    let finished = true
    let announced = false
    let size = { width: 0, height: 0, dpr: 0 }

    const clock = () => (pausedAt ?? performance.now()) - pausedTotal
    const stop = () => { cancelAnimationFrame(frame); frame = 0 }

    const append = (segment) => {
      segments.push({ ...segment, at: clock(), grain: Math.random() })
      if (segments.length > MAX_SEGMENTS) segments.splice(0, segments.length - MAX_SEGMENTS)
    }

    // Offset a quadratic spine along its normals. Pressure varies across the filled
    // polygon, while the beginning and end taper independently of pointer speed.
    const drawSegment = (segment, alpha) => {
      const { a, b, c, start, end, grain } = segment
      const left = [], right = []
      for (let step = 0; step <= 10; step++) {
        const t = step / 10, u = 1 - t
        const x = u * u * a.x + 2 * u * t * b.x + t * t * c.x
        const y = u * u * a.y + 2 * u * t * b.y + t * t * c.y
        const dx = 2 * u * (b.x - a.x) + 2 * t * (c.x - b.x)
        const dy = 2 * u * (b.y - a.y) + 2 * t * (c.y - b.y)
        const length = Math.hypot(dx, dy) || 1
        const radius = (start * u + end * t) * (.44 + .05 * Math.sin(t * 17 + grain * 9))
        left.push([x - dy / length * radius, y + dx / length * radius])
        right.push([x + dy / length * radius, y - dx / length * radius])
      }
      ctx.globalAlpha = alpha * .74
      ctx.beginPath()
      left.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))
      right.reverse().forEach(([x, y]) => ctx.lineTo(x, y))
      ctx.closePath()
      ctx.fill()

      // Separated bristles extend beyond the wet centre. Fast strokes leave more
      // interrupted fibres instead of looking like a digital round-cap marker.
      const dx = c.x - a.x, dy = c.y - a.y
      const length = Math.hypot(dx, dy) || 1
      for (let bristle = -3; bristle <= 3; bristle++) {
        if (segment.fast && (bristle + Math.floor(grain * 10)) % 3 === 0) continue
        const offset = bristle * Math.max(start, end) * .17
        const ox = -dy / length * offset, oy = dx / length * offset
        ctx.globalAlpha = alpha * (.1 + grain * .16)
        ctx.lineWidth = .45 + grain * .65
        ctx.beginPath()
        ctx.moveTo(a.x + ox, a.y + oy)
        ctx.quadraticCurveTo(b.x + ox, b.y + oy, c.x + ox, c.y + oy)
        ctx.stroke()
      }
    }

    const render = (now) => {
      ctx.clearRect(0, 0, size.width, size.height)
      ctx.fillStyle = ctx.strokeStyle = '#16110d'
      for (const segment of segments) {
        const age = Math.max(0, now - segment.at)
        const alpha = GHOST_ALPHA + (1 - GHOST_ALPHA) * Math.exp(-age / 1700)
        if (segment.pool) {
          ctx.globalAlpha = alpha * .12
          ctx.beginPath()
          ctx.ellipse(segment.x, segment.y, segment.radius, segment.radius * .7, -.45, 0, Math.PI * 2)
          ctx.fill()
        } else drawSegment(segment, alpha)
      }
      ctx.globalAlpha = 1
    }

    const finishStroke = () => {
      if (previous && middle && !finished) {
        append({ a: middle, b: previous, c: previous, start: width, end: .35 })
        finished = true
      }
    }

    const tick = () => {
      frame = 0
      if (!visible) return
      const now = clock()
      // A brief pause leaves one modest pool, never an endless automatic flourish.
      if (previous && now - lastMove > 80 && !pooled) {
        finishStroke()
        append({ pool: true, x: previous.x, y: previous.y, radius: Math.min(8, width * .3) })
        pooled = true
      }
      if (now - lastPaint >= 1000 / 30) { render(now); lastPaint = now }
      if (segments.length && now - segments[segments.length - 1].at < DRY_TIME) frame = requestAnimationFrame(tick)
      else if (segments.length) render(now)
    }
    const wake = () => { if (visible && !frame) frame = requestAnimationFrame(tick) }

    const resize = () => {
      const rect = hero.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      if (rect.width === size.width && rect.height === size.height && dpr === size.dpr) return
      size = { width: rect.width, height: rect.height, dpr }
      canvas.width = Math.round(size.width * dpr)
      canvas.height = Math.round(size.height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      // A resized sheet starts clean instead of stretching or misplacing old ink.
      segments = []
      previous = middle = null
      finished = true
      stop()
    }

    const move = (event) => {
      if (!visible || (event.pointerType !== 'mouse' && event.pointerType !== 'pen')) return
      const rect = hero.getBoundingClientRect()
      const point = { x: event.clientX - rect.left, y: event.clientY - rect.top }
      const now = clock()
      if (!announced) { announced = true; onFirstStroke(true) }
      if (!previous) {
        finishStroke()
        previous = middle = point
        width = .5
        finished = false
      } else {
        if (finished) { middle = previous; width = .5 }
        const distance = Math.hypot(point.x - previous.x, point.y - previous.y)
        if (distance < .4) return
        const speed = distance / Math.max(1, now - lastMove)
        const nextWidth = 2.8 + 25.2 * Math.exp(-speed * 1.55)
        const nextMiddle = midpoint(previous, point)
        append({ a: middle, b: previous, c: nextMiddle, start: width, end: nextWidth, fast: speed > 1.5 })
        middle = nextMiddle
        width = nextWidth
        previous = point
        finished = false
      }
      lastMove = now
      pooled = false
      wake()
    }

    const leave = () => { finishStroke(); previous = middle = null; wake() }
    const updateVisibility = () => {
      const next = intersecting && !document.hidden
      if (next === visible) return
      visible = next
      if (!visible) {
        finishStroke()
        previous = middle = null
        pausedAt = performance.now()
        stop()
      } else {
        if (pausedAt !== null) pausedTotal += performance.now() - pausedAt
        pausedAt = null
        if (segments.length && clock() - segments[segments.length - 1].at < DRY_TIME) wake()
      }
    }
    const observer = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver(([entry]) => {
      intersecting = entry.isIntersecting
      updateVisibility()
    })
    const resizeObserver = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(resize)

    resize()
    updateVisibility()
    observer?.observe(hero)
    resizeObserver?.observe(hero)
    hero.addEventListener('pointermove', move, { passive: true })
    hero.addEventListener('pointerleave', leave, { passive: true })
    hero.addEventListener('pointercancel', leave, { passive: true })
    window.addEventListener('resize', resize, { passive: true })
    document.addEventListener('visibilitychange', updateVisibility)
    return () => {
      stop()
      observer?.disconnect()
      resizeObserver?.disconnect()
      hero.removeEventListener('pointermove', move)
      hero.removeEventListener('pointerleave', leave)
      hero.removeEventListener('pointercancel', leave)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', updateVisibility)
    }
  }, [heroRef, onFirstStroke])

  return <canvas className="ink-trail" ref={canvasRef} aria-hidden="true" />
}
