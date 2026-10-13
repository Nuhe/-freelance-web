import { useEffect } from 'react'

// Pauses a fox drawing's idle loops while it is off screen: sets `data-offscreen` on the
// node, which index.css uses to pause every animation inside it. A data attribute, not a
// class, because React owns className and would drop it on re-render.
export default function useFoxLife(ref) {
  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') return undefined
    const observer = new IntersectionObserver(([entry]) => node.toggleAttribute('data-offscreen', !entry.isIntersecting))
    observer.observe(node)
    return () => observer.disconnect()
  }, [ref])
}
