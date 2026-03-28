const services = [
  {
    icon: '⚙️',
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
    icon: '🤖',
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
    icon: '🌐',
    title: 'Desarrollo web',
    description: 'Presencia digital profesional y funcional para tu negocio.',
    features: [
      'Landing pages de alta conversión',
      'Webs institucionales',
      'Formularios y páginas de captación',
      'Paneles de gestión internos',
      'Interfaces adaptadas a tu flujo de trabajo',
    ],
  },
  {
    icon: '🔗',
    title: 'Integraciones y soluciones a medida',
    description: 'Tus herramientas hablando entre sí, sin trabajo manual.',
    features: [
      'Conexión de APIs y sistemas externos',
      'Dashboards e informes centralizados',
      'Herramientas internas de operación',
      'Automatización de procesos complejos',
      'Sistemas simples adaptados a tu equipo',
    ],
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="section-title">Lo que puedo hacer por tu negocio</h2>
          <p className="section-subtitle mx-auto">
            Cada solución está pensada para resolver un problema real de operación, no para impresionar
            con tecnología.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <article key={service.title} className="card group">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl" role="img" aria-label={service.title}>
                  {service.icon}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-blue-500 mt-0.5 shrink-0" aria-hidden="true">→</span>
                    {feat}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#contacto" className="btn-secondary">
            Consultá por tu caso
          </a>
        </div>
      </div>
    </section>
  )
}
