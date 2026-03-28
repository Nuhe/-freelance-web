/**
 * FoxMark — isotipo geométrico de FoxOps
 * Cabeza de zorro: dos orejas puntiagudas, orejas internas en ámbar, ojos oscuros.
 * Usar className para controlar tamaño (w-* h-*).
 */
export default function FoxMark({ className = 'w-7 h-8' }) {
  return (
    <svg
      viewBox="0 0 24 28"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* Cabeza principal — naranja quemado */}
      <path
        d="M3 16 L7 2 L12 8 L17 2 L21 16 Q21 26 12 27 Q3 26 3 16 Z"
        fill="#ea580c"
      />
      {/* Orejas internas — ámbar para dar profundidad */}
      <path d="M7 13 L8.8 4 L11 10 Z" fill="#d97706" />
      <path d="M17 13 L15.2 4 L13 10 Z" fill="#d97706" />
      {/* Ojos — espacio negativo oscuro */}
      <ellipse cx="9.5" cy="17.5" rx="1.2" ry="1" fill="#09090b" />
      <ellipse cx="14.5" cy="17.5" rx="1.2" ry="1" fill="#09090b" />
    </svg>
  )
}
