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
    title: 'Automatización de procesos',
    lead: '¿Cuántas horas pierde tu equipo en tareas que una computadora podría hacer sola?',
    features: [
      'Reportes y cierres de mes automáticos',
      'Carga y procesamiento de datos sin intervención',
      'Lectura y clasificación de mails',
      'Notificaciones y alertas automáticas',
      'Extracción y consolidación de información',
    ],
    result: 'Procesos que corren sin que nadie los ejecute',
  },
  {
    Icon: BotIcon,
    order: '02',
    title: 'Bots y asistentes con IA',
    lead: '¿Siempre las mismas preguntas respondidas manualmente por tu equipo?',
    features: [
      'Bot de atención de consultas frecuentes',
      'Asistente interno de documentos y procesos',
      'Respuestas automáticas por WhatsApp o web',
      'Agente de turnos y derivaciones',
      'IA aplicada a flujos administrativos',
    ],
    result: 'Atención 24/7 sin saturar a tu equipo',
  },
  {
    Icon: IntIcon,
    order: '03',
    title: 'Integraciones y conectores',
    lead: '¿Tus herramientas no se hablan entre sí y todo termina siendo manual igual?',
    features: [
      'Conexión entre APIs, sistemas y planillas',
      'Dashboards con datos en tiempo real',
      'Sincronización automática entre plataformas',
      'Conectores entre CRM, ERP, sheets y mails',
      'Flujos de datos sin intervención humana',
    ],
    result: 'Un ecosistema que funciona junto',
  },
  {
    Icon: WebIcon,
    order: '04',
    title: 'Web y paneles internos',
    lead: '¿Sin presencia digital profesional o sin visibilidad de tu operación?',
    features: [
      'Landing pages orientadas a captación',
      'Webs institucionales claras y funcionales',
      'Paneles de seguimiento de operación',
      'Formularios de contacto y cotización',
      'Interfaces internas para equipos',
    ],
    result: 'Presencia y control desde el browser',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="mb-14">
          <span className="section-label">Lo que hago</span>
          <h2 className="section-title">Servicios</h2>
          <p className="section-subtitle">
            Cada solución empieza por entender el problema, no por elegir la tecnología.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map(({ Icon, order, title, lead, features, result }) => (
            <article key={title} className="card group flex flex-col gap-5">

              {/* Header del servicio */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-orange-600/10 border border-orange-600/20 flex items-center justify-center text-orange-500 shrink-0">
                  <Icon />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] font-mono text-zinc-700">{order}</span>
                    <h3 className="font-semibold text-white text-sm">{title}</h3>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed italic">{lead}</p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-1.5 flex-1">
                {features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-xs text-zinc-500">
                    <span className="text-orange-600/50 mt-0.5 shrink-0 font-mono">—</span>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* Resultado */}
              <div className="pt-4 border-t border-zinc-800/60 flex items-center gap-2">
                <span className="w-1 h-3 bg-orange-600/60 rounded-full shrink-0" />
                <span className="text-xs font-medium text-zinc-400">{result}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <a href="#contacto" className="btn-secondary text-sm">
            Consultá por tu caso específico
          </a>
        </div>
      </div>
    </section>
  )
}
