import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Problemas', href: '#problemas' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Nosotros', href: '#nosotros' },
]

const FoxMark = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
    <path
      d="M3 14 L8 2 L12 9 L16 2 L21 14 Q21 22 12 23 Q3 22 3 14 Z"
      fill="currentColor"
      className="text-orange-500"
    />
    <ellipse cx="9.5" cy="15.5" rx="1.1" ry="1" fill="#09090b" />
    <ellipse cx="14.5" cy="15.5" rx="1.1" ry="1" fill="#09090b" />
  </svg>
)

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-900' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#inicio" className="flex items-center gap-2.5">
            <FoxMark />
            <span className="text-white font-bold text-lg tracking-tight">
              Fox<span className="text-orange-500">Ops</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-zinc-500 hover:text-white text-sm px-3 py-2 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contacto" className="hidden md:inline-flex btn-primary text-sm py-2 px-4">
              Hablemos
            </a>
            <button
              className="md:hidden text-zinc-500 hover:text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú"
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-zinc-900 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-zinc-400 hover:text-white px-4 py-2.5 rounded-lg hover:bg-zinc-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 px-4">
              <a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="btn-primary w-full justify-center text-sm"
              >
                Hablemos
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
