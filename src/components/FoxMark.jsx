// Logo mark: a kitsune mask in a vermilion hanko seal. Cream face, sumi ears and eye slits,
// one orange flame mark. Flat shapes with a hand-cut seal edge so it stays legible at 16-36px.
const C = { seal: '#c8401e', cream: '#f5f0eb', ink: '#140d0a', orange: '#f3732d' }

export default function FoxMark({ className = '' }) {
  return <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
    <path d="M4 3.8L8.7 3.0L13.4 3.6L18.1 3.2L22.8 3.0L27.5 3.6L32.2 3.9L37 3.5L41.7 2.7L46.4 3.5L51.1 3.0L55.8 4.5L61 4.0L60.2 8.7L60 13.4L60.6 18.1L60.5 22.8L60.1 27.5L59.9 32.2L59.9 37.0L60.1 41.7L61.1 46.4L60 51.1L60.2 55.8L60 59.8L55.3 60.8L50.6 60.6L45.9 60.2L41.2 60.1L36.5 60.6L31.7 61.0L27 60.5L22.3 59.8L17.6 62.0L12.9 59.3L8.2 60.3L3 60.0L2.1 55.3L3.9 50.6L3.1 45.9L3.7 41.2L3.7 36.5L3.7 31.7L4.4 27.0L3.3 22.3L3.6 17.6L3.4 12.9L2.3 8.2Z" fill={C.seal} />
    <path d="M13 7.5C17 11 21.5 15.5 25 19.2Q32 16.6 39 19.2C42.5 15.5 47 11 51 7.5C53.6 13.5 54.6 20.5 53.8 27.5C53.4 31.5 52.2 35 50 38.6C45.6 45.6 39.4 51.6 32 57C24.6 51.6 18.4 45.6 14 38.6C11.8 35 10.6 31.5 10.2 27.5C9.4 20.5 10.4 13.5 13 7.5Z" fill={C.cream} />
    <path d="M15.4 12.6C18.4 15.4 21 18 22.8 20.4C20.2 21.6 18.2 23.4 16.8 25.6C15.2 21.4 14.8 16.8 15.4 12.6ZM48.6 12.6C45.6 15.4 43 18 41.2 20.4C43.8 21.6 45.8 23.4 47.2 25.6C48.8 21.4 49.2 16.8 48.6 12.6Z" fill={C.ink} />
    <path d="M29.2 33.8C25.2 33.6 20.6 31.6 16.8 27.2C21.6 28.4 26 30.4 29.2 33.8ZM34.8 33.8C38.8 33.6 43.4 31.6 47.2 27.2C42.4 28.4 38 30.4 34.8 33.8Z" fill={C.ink} />
    <path d="M32 20.6C34.4 23.6 35 27 32 31.4C29 27 29.6 23.6 32 20.6Z" fill={C.orange} />
    <path d="M28.6 50.4Q32 48.6 35.4 50.4Q33.8 53.6 32 54.6Q30.2 53.6 28.6 50.4Z" fill={C.ink} />
  </svg>
}
