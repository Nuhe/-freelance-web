import { useEffect } from 'react'

// Brings the hero fox to life:
// - its pupils follow the pointer, but only for a fine hover pointer and when motion is allowed.
//   Pointer moves are throttled to one update per animation frame and written as CSS vars
//   (--look-x / --look-y, each -1..1); index.css turns them into a clamped, eased pupil offset.
// - idle loops (blink, ear flick, tail sway) pause while the stage is off screen.
export default function useFoxLife(ref) {
  useEffect(() => {
    const node = ref.current
    if (!node) return undefined
    const cleanups = []

    if (typeof IntersectionObserver !== 'undefined') {
      // A data attribute, not a class: React owns className and would drop it on re-render.
      const observer = new IntersectionObserver(([entry]) => node.toggleAttribute('data-offscreen', !entry.isIntersecting))
      observer.observe(node)
      cleanups.push(() => observer.disconnect())
    }

    const canTrack = window.matchMedia('(hover: hover) and (pointer: fine)').matches
      && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const eye = node.querySelector('.fox-eye-near')
    if (canTrack && eye) {
      let frame = 0
      let pointerX = 0
      let pointerY = 0
      const update = () => {
        frame = 0
        const box = eye.getBoundingClientRect()
        const dx = pointerX - (box.left + box.width / 2)
        const dy = pointerY - (box.top + box.height / 2)
        const distance = Math.hypot(dx, dy) || 1
        // Full deflection once the pointer is ~260px away; closer pointers look less far.
        const reach = Math.min(distance / 260, 1)
        node.style.setProperty('--look-x', ((dx / distance) * reach).toFixed(3))
        node.style.setProperty('--look-y', ((dy / distance) * reach).toFixed(3))
      }
      const onMove = (event) => {
        pointerX = event.clientX
        pointerY = event.clientY
        if (!frame) frame = requestAnimationFrame(update)
      }
      window.addEventListener('pointermove', onMove, { passive: true })
      cleanups.push(() => {
        window.removeEventListener('pointermove', onMove)
        cancelAnimationFrame(frame)
        node.style.removeProperty('--look-x')
        node.style.removeProperty('--look-y')
      })
    }

    return () => cleanups.forEach((cleanup) => cleanup())
  }, [ref])
}
