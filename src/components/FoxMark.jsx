import { useId } from 'react'

// Logo mark: a simplified head of the FoxCharacter mascot, 3/4 view facing left,
// with the avatar's sly half-lid eyes. Flat fills only so it stays legible at 30-36px.
const C = { orange: '#f3732d', cream: '#f5f0eb', ink: '#140a06', dark: '#2a120a' }
const EYE_NEAR = { cx: 38.4, cy: 31.4, rx: 7, ry: 6.4 }
const EYE_FAR = { cx: 23.8, cy: 34.2, rx: 3.6, ry: 4.6 }
const RUFF = 'L62 35L58 38L62 42L57 43L59 47.5L53.5 47.5C50 52 43 54 36 53C28 52 20 48 14 46'

export default function FoxMark({ className = '' }) {
  const uid = useId().replace(/[^\w-]/g, '')
  const near = `foxmark${uid}-near`
  const far = `foxmark${uid}-far`
  return <svg className={className} viewBox="0 -8 64 64" fill="none" aria-hidden="true" focusable="false">
    <defs>
      <clipPath id={near}><ellipse {...EYE_NEAR} /></clipPath>
      <clipPath id={far}><ellipse {...EYE_FAR} /></clipPath>
    </defs>
    <path d="M22 25C18 16 15 6 15-5C22 0 28 8 31 16Z" fill={C.orange} />
    <path d="M23.5 21C20.5 14 18.5 6 18.5 0C23.5 4 27 9 29 15Z" fill={C.dark} />
    <path d="M36 15C40 6 46-2 54-7C56 3 55 14 51 24Z" fill={C.orange} />
    <path d="M39.5 14.5C43 7 48 1 52-3C53.5 5 52.5 13 49.5 20C46.5 17 43 15 39.5 14.5Z" fill={C.dark} />
    <path d={`M5 36C10 32 15 29 19 26C24 19 31 15 38 14C46 13 53 16 56 22C58 26 58 30 58 33${RUFF}C10 44.5 6 42 5 40Z`} fill={C.orange} />
    <path d={`M7 41C14 40.4 20 40 26 40.2C33 40.4 39.5 39 44.5 35.5C48.5 32.8 52 31.6 58 32.4${RUFF}C10 44.5 7 43 7 41Z`} fill={C.cream} />
    <ellipse {...EYE_NEAR} fill={C.cream} />
    <g clipPath={`url(#${near})`}>
      <circle cx="40.8" cy="34" r="3.3" fill={C.ink} />
      <path d="M30 22H48V31.4C43 30.2 36 30.2 30 31.8Z" fill={C.orange} />
    </g>
    <path d="M30.8 32.6C35 30.2 42 29.8 46 31.8L45.8 29C41 27.2 34.6 28 30.8 32.6Z" fill={C.ink} />
    <ellipse {...EYE_NEAR} stroke={C.ink} strokeWidth="1.7" />
    <ellipse {...EYE_FAR} fill={C.cream} />
    <g clipPath={`url(#${far})`}>
      <circle cx="25" cy="36.4" r="2.2" fill={C.ink} />
      <path d="M19 28H30V34.2C27 33.4 23.5 33.4 19 34.6Z" fill={C.orange} />
    </g>
    <path d="M20 35.2C22.2 33.6 25.6 33.4 27.8 34.4L27.6 32.6C25.2 31.8 22.2 32.4 20 35.2Z" fill={C.ink} />
    <ellipse {...EYE_FAR} stroke={C.ink} strokeWidth="1.4" />
    <path d="M30 23.6C34.4 19.6 41.6 19 47.4 22.6L46.2 25C41 22.6 35.6 22.8 31.4 25.4Z" fill={C.ink} />
    <path d="M2.8 37.8C2.8 35.2 5.8 34.2 8.4 34.8C10.6 35.4 10.8 38.6 9.1 40.1C7.1 41.6 2.8 40.9 2.8 37.8Z" fill={C.ink} />
    <path d="M4.8 36.8C5.6 36 7 35.8 7.8 36.2C7 36.9 5.8 37.2 4.8 36.8Z" fill={C.cream} />
    <path d="M9 41.2C14 43.4 20 44.6 25.4 44C27.8 43.6 29 42.2 29.4 40.6L28 40.4C27 41.8 25.9 42.4 24.6 42.5C19.5 43 14 42.2 9 41.2Z" fill={C.ink} />
    <path d="M18.2 43.6L20 48.2L22.4 43.7Z" fill={C.cream} />
  </svg>
}
