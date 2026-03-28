const WHATSAPP_NUMBER = '541134287724'

const FoxMark = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-orange-500" aria-hidden="true">
    <path d="M3 14 L8 2 L12 9 L16 2 L21 14 Q21 22 12 23 Q3 22 3 14 Z" fill="currentColor" />
    <ellipse cx="9.5" cy="15.5" rx="1.1" ry="1" fill="#09090b" />
    <ellipse cx="14.5" cy="15.5" rx="1.1" ry="1" fill="#09090b" />
  </svg>
)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">

          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <FoxMark />
              <span className="text-white font-bold">Fox<span className="text-orange-500">Ops</span></span>
            </div>
            <p className="text-zinc-600 text-xs leading-relaxed">
              Automatización, IA y desarrollo web para negocios que quieren trabajar mejor.
            </p>
          </div>

          <div>
            <h4 className="text-zinc-400 font-semibold text-xs font-mono tracking-wider mb-4 uppercase">Servicios</h4>
            <ul className="space-y-2 text-xs text-zinc-600">
              {['Automatización', 'Bots con IA', 'Desarrollo Web', 'Integraciones'].map((s) => (
                <li key={s}>
                  <a href="#servicios" className="hover:text-zinc-400 transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-400 font-semibold text-xs font-mono tracking-wider mb-4 uppercase">Navegación</h4>
            <ul className="space-y-2 text-xs text-zinc-600">
              {[
                { label: 'Problemas', href: '#problemas' },
                { label: 'Cómo trabajo', href: '#proceso' },
                { label: 'Proyectos', href: '#proyectos' },
                { label: 'Sobre mí', href: '#nosotros' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-zinc-400 transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-400 font-semibold text-xs font-mono tracking-wider mb-4 uppercase">Contacto</h4>
            <ul className="space-y-2.5 text-xs text-zinc-600">
              <li>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors">WhatsApp</a>
              </li>
              <li>
                <a href="mailto:contacto@foxops.dev"
                  className="hover:text-zinc-400 transition-colors">contacto@foxops.dev</a>
              </li>
              <li>
                <a href="https://github.com/Nuhe" target="_blank" rel="noopener noreferrer"
                  className="hover:text-zinc-400 transition-colors">GitHub</a>
              </li>
              <li>
                <a href="https://linkedin.com/in/Nuhe" target="_blank" rel="noopener noreferrer"
                  className="hover:text-zinc-400 transition-colors">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-700 text-xs font-mono">© {year} FoxOps</p>
          <p className="text-zinc-800 text-xs font-mono">React · Vite · Tailwind</p>
        </div>
      </div>
    </footer>
  )
}
