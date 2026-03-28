const projects = [
  {
    tag: 'Automatización',
    tagColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    title: 'Automatización de facturación mensual',
    client: 'Estudio contable',
    desc: 'Script que consolida datos de múltiples fuentes, genera reportes en Excel y los envía automáticamente por mail al cierre del mes. Eliminó 8 horas de trabajo manual mensual.',
    techs: ['Python', 'Pandas', 'SMTP'],
    metric: '8 hs/mes ahorradas',
  },
  {
    tag: 'Bot IA',
    tagColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    title: 'Asistente de consultas para pacientes',
    client: 'Centro de salud',
    desc: 'Bot conectado a WhatsApp que responde preguntas frecuentes, informa horarios, cobertura y derivaciones. Redujo la carga de atención telefónica repetitiva en un 60%.',
    techs: ['n8n', 'OpenAI API', 'WhatsApp'],
    metric: '60% menos llamadas',
  },
  {
    tag: 'Desarrollo Web',
    tagColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    title: 'Landing page con captación de leads',
    client: 'Taller mecánico',
    desc: 'Sitio web profesional con formulario de contacto, galería de trabajos, reseñas y botón WhatsApp. Mejoró la captación de clientes nuevos desde búsquedas locales de Google.',
    techs: ['React', 'Tailwind CSS', 'Vite'],
    metric: '+3x consultas por web',
  },
  {
    tag: 'Panel interno',
    tagColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    title: 'Dashboard de seguimiento de pedidos',
    client: 'Empresa de logística',
    desc: 'Panel web interno que centraliza el estado de pedidos en tiempo real, actualiza datos desde planillas compartidas y genera alertas automáticas ante desvíos en la operación.',
    techs: ['React', 'Node.js', 'Sheets API'],
    metric: 'Visibilidad operativa total',
  },
]

export default function Portfolio() {
  return (
    <section id="proyectos" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="section-title">Proyectos y ejemplos</h2>
          <p className="section-subtitle mx-auto">
            Casos representativos de lo que construyo. Cada uno resuelve un problema concreto de
            operación o negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="card flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full border ${p.tagColor}`}
                >
                  {p.tag}
                </span>
                <span className="text-xs text-gray-600">{p.client}</span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                <div className="flex gap-2 flex-wrap">
                  {p.techs.map((t) => (
                    <span key={t} className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-green-400 ml-2 shrink-0">
                  {p.metric}
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-8">
          ¿Tenés un caso similar?{' '}
          <a href="#contacto" className="text-blue-400 hover:text-blue-300 underline transition-colors">
            Contame tu situación
          </a>
        </p>
      </div>
    </section>
  )
}
