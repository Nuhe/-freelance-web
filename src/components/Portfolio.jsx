const projects = [
  {
    tag: 'Automatización',
    tagColor: 'text-orange-400 border-orange-500/20 bg-orange-500/5',
    title: 'Automatización de facturación mensual',
    client: 'Estudio contable',
    desc: 'Script que consolida datos de múltiples fuentes, genera reportes en Excel y los envía automáticamente al cierre del mes. Eliminó 8 horas de trabajo manual mensual.',
    techs: ['Python', 'Pandas', 'SMTP'],
    metric: '8 hs/mes ahorradas',
  },
  {
    tag: 'Bot IA',
    tagColor: 'text-amber-400 border-amber-500/20 bg-amber-500/5',
    title: 'Asistente de consultas para pacientes',
    client: 'Centro de salud',
    desc: 'Bot en WhatsApp que responde preguntas frecuentes, informa horarios, cobertura y derivaciones. Redujo la carga de atención telefónica en un 60%.',
    techs: ['n8n', 'OpenAI API', 'WhatsApp'],
    metric: '60% menos llamadas',
  },
  {
    tag: 'Web',
    tagColor: 'text-zinc-400 border-zinc-700 bg-zinc-800/50',
    title: 'Landing page con captación de leads',
    client: 'Taller mecánico',
    desc: 'Sitio web profesional con formulario de contacto, galería de trabajos, reseñas y botón WhatsApp. Mejoró la captación desde búsquedas locales de Google.',
    techs: ['React', 'Tailwind', 'Vite'],
    metric: '+3x consultas web',
  },
  {
    tag: 'Panel interno',
    tagColor: 'text-orange-300 border-orange-400/20 bg-orange-400/5',
    title: 'Dashboard de seguimiento de pedidos',
    client: 'Empresa de logística',
    desc: 'Panel web que centraliza el estado de pedidos en tiempo real, actualiza desde planillas compartidas y genera alertas automáticas ante desvíos en la operación.',
    techs: ['React', 'Node.js', 'Sheets API'],
    metric: 'Visibilidad operativa total',
  },
]

export default function Portfolio() {
  return (
    <section id="proyectos" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <h2 className="section-title">Proyectos</h2>
          <p className="section-subtitle">
            Casos representativos. Cada uno resuelve un problema concreto de operación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <article key={p.title} className="card flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${p.tagColor}`}>
                  {p.tag}
                </span>
                <span className="text-xs text-zinc-700">{p.client}</span>
              </div>

              <h3 className="text-base font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-5 flex-1">{p.desc}</p>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                <div className="flex gap-1.5 flex-wrap">
                  {p.techs.map((t) => (
                    <span key={t} className="text-xs text-zinc-600 bg-zinc-800/80 px-2 py-0.5 rounded font-mono">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-amber-400 ml-2 shrink-0">{p.metric}</span>
              </div>
            </article>
          ))}
        </div>

        <p className="text-zinc-700 text-sm mt-8">
          ¿Tenés un caso similar?{' '}
          <a href="#contacto" className="text-orange-500/70 hover:text-orange-400 underline transition-colors">
            Contame tu situación
          </a>
        </p>
      </div>
    </section>
  )
}
