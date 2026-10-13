import { useLayoutEffect, useRef } from 'react'

// Reveals an element once: marks it `reveal-ready` (enables the hidden initial
// state in CSS) and adds `is-inview` the first time it enters the viewport.
// Without IntersectionObserver the element is left untouched, so it stays visible.
// Runs as a layout effect so the hidden state applies before the first paint;
// otherwise elements already in the viewport would flash visible, then hide.
export default function useInView({ rootMargin = '0px 0px -10% 0px', threshold = 0.15 } = {}) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') return undefined
    node.classList.add('reveal-ready')
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      node.classList.add('is-inview')
      observer.unobserve(node)
    }, { rootMargin, threshold })
    observer.observe(node)
    return () => observer.disconnect()
  }, [rootMargin, threshold])

  return ref
}
