const WHATSAPP_NUMBER = '541134287724'

const footerLinks = {
  servicios: [
    { label: 'Automatización', href: '#servicios' },
    { label: 'Bots con IA', href: '#servicios' },
    { label: 'Desarrollo Web', href: '#servicios' },
    { label: 'Integraciones', href: '#servicios' },
  ],
  navegacion: [
    { label: 'Problemas que resuelvo', href: '#problemas' },
    { label: 'Cómo trabajo', href: '#proceso' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Sobre mí', href: '#nosotros' },
  ],
  contacto: [
    { icon: '💬', label: 'WhatsApp', href: `https://wa.me/${WHATSAPP_NUMBER}`, external: true },
    { icon: '📧', label: 'contacto@foxops.dev', href: 'mailto:contacto@foxops.dev', external: false },
    { icon: '🐙', label: 'github.com/Nuhe', href: 'https://github.com/Nuhe', external: true },
    { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/in/Nuhe', external: true },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-blue-500 text-xl" aria-hidden="true">⚡</span>
              <span className="text-white font-bold text-lg">
                Fox<span className="text-blue-500">Ops</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Automatización, IA y desarrollo web para negocios que quieren trabajar mejor.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              {footerLinks.servicios.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-gray-300 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              {footerLinks.navegacion.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-gray-300 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.contacto.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    <span aria-hidden="true">{item.icon}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {year} FoxOps. Todos los derechos reservados.
          </p>
          <p className="text-gray-700 text-xs">
            Hecho con React + Vite + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
