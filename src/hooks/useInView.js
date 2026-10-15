import { useLayoutEffect, useRef } from 'react'

// Visible prerendered content must not disappear when hydration attaches effects.
// Only sections still below the viewport receive the reveal's hidden initial state.
export default function useInView({ rootMargin = '0px 0px -10% 0px', threshold = 0.15 } = {}) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') return undefined
    if (node.getBoundingClientRect().top < window.innerHeight) return undefined
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
