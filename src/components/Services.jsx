const AutoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
  </svg>
)

const BotIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="3" y="8" width="18" height="12" rx="2" />
    <circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none" />
    <path d="M9.5 18h5" />
    <path d="M12 8V5" />
    <path d="M9 5h6" />
  </svg>
)

const WebIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="3" width="20" height="17" rx="2" />
    <path d="M2 8h20" />
    <circle cx="6" cy="5.5" r="0.75" fill="currentColor" stroke="none" />
    <circle cx="9.5" cy="5.5" r="0.75" fill="currentColor" stroke="none" />
    <path d="M6 13h5M6 16.5h3M13 11h5v5.5h-5z" />
  </svg>
)

const IntIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <path d="M8.59 13.51l6.83 3.98M15.41 6.51L8.59 10.49" />
  </svg>
)

const services = [
  {
    Icon: AutoIcon,
    title: 'Automatización de tareas',
    description: 'Eliminá el trabajo repetitivo de tu operación diaria.',
    features: [
      'Carga y procesamiento automático de datos',
      'Reportes automáticos programados',
      'Lectura y procesamiento de mails',
      'Scraping y extracción de información',
      'Conexión entre sistemas, planillas y APIs',
    ],
  },
  {
    Icon: BotIcon,
    title: 'Bots y asistentes con IA',
    description: 'Tu equipo enfocado en lo que importa, el bot resuelve el resto.',
    features: [
      'Atención de consultas frecuentes',
      'Asistentes administrativos internos',
      'Consulta y búsqueda en documentos',
      'Agentes conversacionales para clientes',
      'Integración con WhatsApp, web o sistemas internos',
    ],
  },
  {
    Icon: WebIcon,
    title: 'Desarrollo web',
    description: 'Presencia digital profesional y funcional.',
    features: [
      'Landing pages de alta conversión',
      'Webs institucionales',
      'Formularios y páginas de captación',
      'Paneles de gestión internos',
      'Interfaces adaptadas a tu flujo de trabajo',
    ],
  },
  {
    Icon: IntIcon,
    title: 'Integraciones a medida',
    description: 'Tus herramientas hablando entre sí, sin trabajo manual.',
    features: [
      'Conexión de APIs y sistemas externos',
      'Dashboards e informes centralizados',
      'Herramientas internas de operación',
      'Automatización de procesos complejos',
      'Sistemas adaptados a tu equipo',
    ],
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <h2 className="section-title">Servicios</h2>
          <p className="section-subtitle">
            Cada solución está pensada para un problema real de operación,
            no para impresionar con tecnología.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map(({ Icon, title, description, features }) => (
            <article key={title} className="card group">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                  <Icon />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">{title}</h3>
                  <p className="text-zinc-600 text-xs mt-0.5">{description}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm text-zinc-500">
                    <span className="text-orange-500/60 mt-0.5 shrink-0 font-mono text-xs">—</span>
                    {feat}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <a href="#contacto" className="btn-secondary text-sm">
            Consultá por tu caso
          </a>
        </div>
      </div>
    </section>
  )
}
