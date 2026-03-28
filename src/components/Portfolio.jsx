const projects = [
  {
    tag: 'Automatización',
    tagStyle: 'text-orange-500 border-orange-600/25 bg-orange-600/5',
    title: 'Cierre mensual automatizado',
    context: 'Estudio contable · 2 empleados en el área',
    problem: 'El equipo pasaba 8 horas mensuales consolidando datos de 4 fuentes distintas y generando reportes en Excel.',
    solution: 'Script que centraliza, procesa y envía el reporte mensual automáticamente. Corre solo al cierre de cada mes.',
    techs: ['Python', 'Pandas', 'Excel API', 'SMTP'],
    metric: '8 hs → 20 min',
    metricLabel: 'por ciclo mensual',
  },
  {
    tag: 'Bot IA',
    tagStyle: 'text-amber-400 border-amber-500/25 bg-amber-500/5',
    title: 'Asistente de turnos y consultas',
    context: 'Consultorio médico · 80+ consultas/sem',
    problem: 'El equipo administrativo atendía las mismas preguntas de turnos, cobertura y horarios todo el día por WhatsApp.',
    solution: 'Bot en WhatsApp que responde automáticamente usando la información del consultorio. Deriva solo los casos que lo requieren.',
    techs: ['n8n', 'GPT-4', 'WhatsApp API'],
    metric: '−60%',
    metricLabel: 'de carga en atención',
  },
  {
    tag: 'Web',
    tagStyle: 'text-zinc-400 border-zinc-700 bg-zinc-800/40',
    title: 'Landing page con captación activa',
    context: 'Taller mecánico · Sin presencia digital previa',
    problem: 'Sin web, los clientes nuevos no podían encontrar el taller en Google ni tener una primera impresión profesional.',
    solution: 'Landing page clara con formulario de contacto, galería de trabajos y botón directo a WhatsApp.',
    techs: ['React', 'Tailwind', 'Analytics'],
    metric: '+3×',
    metricLabel: 'consultas desde web',
  },
  {
    tag: 'Panel interno',
    tagStyle: 'text-orange-300 border-orange-400/20 bg-orange-400/5',
    title: 'Dashboard de operación logística',
    context: 'Empresa de logística · 5 personas en operaciones',
    problem: 'El estado de pedidos vivía en 3 planillas distintas. Nadie tenía visibilidad real sin preguntar a alguien más.',
    solution: 'Panel web centralizado con datos en tiempo real, alertas por desvíos y acceso para todo el equipo.',
    techs: ['React', 'Node.js', 'Sheets API'],
    metric: '1 vista',
    metricLabel: 'para toda la operación',
  },
]

export default function Portfolio() {
  return (
    <section id="proyectos" className="py-24 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="mb-14">
          <span className="section-label">Ejemplos de trabajo</span>
          <h2 className="section-title">Casos y proyectos</h2>
          <p className="section-subtitle">
            Ejemplos representativos de lo que construyo. Cada uno partió de un problema real de operación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <article key={p.title} className="card flex flex-col gap-4">

              {/* Header */}
              <div className="flex items-center justify-between">
                <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${p.tagStyle}`}>
                  {p.tag}
                </span>
                <span className="text-[11px] text-zinc-700 font-mono">{p.context}</span>
              </div>

              <h3 className="text-base font-semibold text-white leading-snug">{p.title}</h3>

              {/* Problema y solución */}
              <div className="space-y-2">
                <div className="flex gap-2.5">
                  <span className="text-[10px] font-mono text-zinc-700 pt-0.5 shrink-0 w-14">Problema</span>
                  <p className="text-xs text-zinc-500 leading-relaxed">{p.problem}</p>
                </div>
                <div className="flex gap-2.5">
                  <span className="text-[10px] font-mono text-orange-600/50 pt-0.5 shrink-0 w-14">Solución</span>
                  <p className="text-xs text-zinc-400 leading-relaxed">{p.solution}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-zinc-800/60 mt-auto">
                <div className="flex gap-1.5 flex-wrap">
                  {p.techs.map((t) => (
                    <span key={t} className="text-[10px] text-zinc-600 bg-zinc-800/60 px-2 py-0.5 rounded font-mono">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="text-right ml-3 shrink-0">
                  <div className="text-sm font-bold text-amber-400">{p.metric}</div>
                  <div className="text-[10px] text-zinc-600 font-mono">{p.metricLabel}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="text-zinc-700 text-xs mt-8 font-mono">
          ¿Tenés un caso similar?{' '}
          <a href="#contacto" className="text-orange-600/60 hover:text-orange-500 underline transition-colors">
            Contame el problema.
          </a>
        </p>
      </div>
    </section>
  )
}
