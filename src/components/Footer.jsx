import FoxMark from './FoxMark'

const NAV = [
  { label: 'Qué incluye', href: '#servicios' },
  { label: 'Planes', href: '#planes' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Demos', href: '#proyectos' },
  { label: 'Sobre FoxOps', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

const SOCIAL = [
  { label: 'GitHub', href: 'https://github.com/Nuhe', icon: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  )},
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0c0c0c] border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

        <div className="grid sm:grid-cols-[1fr_auto] gap-10 items-start mb-10">

          {/* ── Marca ── */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-9 flex items-center justify-center">
                <FoxMark className="w-7 h-8" />
              </div>
              <span className="text-white font-bold text-sm tracking-widest">FOXOPS</span>
            </div>
            <p className="text-zinc-700 text-xs font-mono max-w-xs leading-relaxed">
              Páginas web profesionales, medibles y acompañadas<br />
              para pequeños negocios y profesionales.
            </p>
          </div>

          {/* ── Social links ── */}
          <div className="flex gap-2">
            {SOCIAL.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                title={s.label}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-zinc-800 text-zinc-700 hover:text-zinc-300 hover:border-zinc-700 transition-colors">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── Nav ── */}
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2 mb-8">
          {NAV.map((n) => (
            <a key={n.label} href={n.href}
              className="text-[11px] text-zinc-700 hover:text-zinc-400 transition-colors font-mono">
              {n.label}
            </a>
          ))}
        </nav>

        {/* ── Bottom ── */}
        <div className="border-t border-zinc-900 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-[10px] font-mono text-zinc-800">
          <span>© {year} FoxOps. Todos los derechos reservados.</span>
          <span className="text-zinc-900">Presencia digital clara y sin vueltas.</span>
        </div>
      </div>
    </footer>
  )
}
