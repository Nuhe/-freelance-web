const AutoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
  </svg>
)

const ScrapingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
    <path d="M11 8v6M8 11h6" />
  </svg>
)

const ToolIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
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

const WebIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="3" width="20" height="17" rx="2" />
    <path d="M2 8h20" />
    <circle cx="6" cy="5.5" r="0.75" fill="currentColor" stroke="none" />
    <circle cx="9.5" cy="5.5" r="0.75" fill="currentColor" stroke="none" />
    <path d="M6 13h5M6 16.5h3M13 11h5v5.5h-5z" />
  </svg>
)

const services = [
  {
    Icon: AutoIcon,
    order: '01',
    title: 'Automatización de tareas',
    lead: '¿Tu equipo dedica tiempo a tareas que podrían correr solas?',
    features: [
      'Scripts para carga y procesamiento de datos',
      'Generación automática de reportes',
      'Envío programado de archivos o notificaciones',
      'Procesamiento de planillas y formularios',
      'Eliminación de pasos manuales repetitivos',
    ],
    result: 'Menos tiempo perdido en tareas que no necesitan personas',
    techs: ['Python', 'Pandas', 'openpyxl', 'SMTP'],
  },
  {
    Icon: ScrapingIcon,
    order: '02',
    title: 'Scraping y extracción de datos',
    lead: '¿Necesitás datos de sitios o sistemas que no tienen exportación directa?',
    features: [
      'Extracción de información desde sitios web',
      'Automatización de navegación y consultas',
      'Ordenamiento y procesamiento de datos obtenidos',
      'Armado de bases de datos o reportes a partir de scraping',
      'Consultas periódicas automatizadas',
    ],
    result: 'Datos disponibles sin carga manual',
    techs: ['Python', 'Selenium', 'requests', 'BeautifulSoup'],
  },
  {
    Icon: ToolIcon,
    order: '03',
    title: 'Herramientas internas y bots simples',
    lead: '¿Hay tareas repetitivas en tu equipo que podrían tener un botón o un bot?',
    features: [
      'Bots para respuestas o consultas internas simples',
      'Utilidades para tareas administrativas frecuentes',
      'Scripts para procesar o transformar información',
      'Herramientas para ordenar trabajo operativo',
      'Automatización de flujos de atención básicos',
    ],
    result: 'Menos pasos manuales para el equipo',
    techs: ['Python', 'Telegram Bot API', 'scripts', 'APIs'],
  },
  {
    Icon: IntIcon,
    order: '04',
    title: 'Integraciones prácticas',
    lead: '¿Tus herramientas no se comunican y todo termina siendo manual igual?',
    features: [
      'Conexión entre formularios, mails y planillas',
      'Flujos simples para reducir pasos manuales',
      'Integración con APIs de servicios existentes',
      'Automatización entre herramientas que ya usás',
      'Procesamiento automático de datos entrantes',
    ],
    result: 'Menos pasos intermedios entre herramientas',
    techs: ['Python', 'APIs REST', 'Sheets API', 'webhooks'],
  },
  {
    Icon: WebIcon,
    order: '05',
    title: 'Soluciones web funcionales',
    lead: '¿Necesitás una web, un formulario o una interfaz simple para trabajar mejor?',
    features: [
      'Landing pages y webs institucionales',
      'Formularios de contacto o carga de datos',
      'Paneles simples para seguimiento interno',
      'Interfaces para procesos operativos',
      'Webs que generan consultas reales',
    ],
    result: 'Interfaz útil, sin complejidad innecesaria',
    techs: ['React', 'Tailwind', 'Vite', 'HTML/CSS'],
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="mb-14">
          <span className="section-label">Lo que construyo</span>
          <h2 className="section-title">Servicios</h2>
          <p className="section-subtitle">
            Soluciones prácticas para reducir trabajo manual y mejorar procesos operativos.
            Sin tecnología innecesaria, sin complejidad que no se use.
          </p>
        </div>

        <div className="space-y-px bg-zinc-800/30 rounded-2xl overflow-hidden border border-zinc-800/40">
          {services.map((s) => {
            const { Icon } = s
            return (
              <div key={s.order} className="bg-zinc-950 hover:bg-zinc-900/60 transition-colors p-6 md:p-8 group">
                <div className="grid md:grid-cols-[220px_1fr_200px] gap-6 items-start">

                  {/* Número + título */}
                  <div className="flex items-start gap-3">
                    <span className="text-[11px] font-mono text-zinc-700 mt-0.5 group-hover:text-orange-600/40 transition-colors">
                      {s.order}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 text-zinc-500 mb-2 group-hover:text-orange-500/70 transition-colors">
                        <Icon />
                      </div>
                      <h3 className="text-sm font-semibold text-white">{s.title}</h3>
                      <p className="text-xs text-zinc-600 mt-1 leading-relaxed">{s.lead}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-1.5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-zinc-500">
                        <span className="text-orange-600/50 mt-0.5 shrink-0">›</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Resultado + techs */}
                  <div className="space-y-3">
                    <div className="text-xs text-zinc-400 italic leading-relaxed border-l-2 border-orange-600/30 pl-3">
                      {s.result}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {s.techs.map((t) => (
                        <span key={t} className="text-[10px] text-zinc-600 bg-zinc-800/60 px-2 py-0.5 rounded font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
