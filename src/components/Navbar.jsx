import { useState, useEffect } from 'react'
import FoxMark from './FoxMark'

const navLinks = [
  { label: 'Problemas', href: '#problemas' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cómo trabajo', href: '#proceso' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Nosotros', href: '#nosotros' },
]

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
        isScrolled
          ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-900'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5 group">
            <FoxMark className="w-6 h-7" />
            <span className="text-white font-bold text-base tracking-tight">
              FOX<span className="text-orange-600">OPS</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-zinc-500 hover:text-zinc-200 text-sm px-3.5 py-2 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contacto" className="hidden md:inline-flex btn-primary text-sm py-2 px-5">
              Hablemos
            </a>
            <button
              className="md:hidden text-zinc-500 hover:text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú"
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-zinc-900 py-3 space-y-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-zinc-400 hover:text-white px-4 py-2.5 rounded-lg hover:bg-zinc-900/60 transition-colors text-sm"
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
