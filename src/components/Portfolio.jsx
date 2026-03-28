const examples = [
  {
    tag: 'Automatización',
    tagStyle: 'text-orange-500 border-orange-600/25 bg-orange-600/5',
    title: 'Script de cierre mensual',
    problem: 'Consolidar datos de varias planillas y generar un reporte al cierre del mes toma horas cada vez.',
    solution: 'Script en Python que lee los archivos, procesa los datos y genera el reporte automáticamente.',
    techs: ['Python', 'Pandas', 'openpyxl'],
  },
  {
    tag: 'Scraping',
    tagStyle: 'text-amber-400 border-amber-500/25 bg-amber-500/5',
    title: 'Extractor de datos de sistema web',
    problem: 'Un sistema interno o externo no tiene exportación directa y los datos hay que copiarlos a mano.',
    solution: 'Script con Selenium que navega el sistema, extrae la información y la organiza en un archivo usable.',
    techs: ['Python', 'Selenium', 'BeautifulSoup'],
  },
  {
    tag: 'Herramienta interna',
    tagStyle: 'text-zinc-300 border-zinc-600/30 bg-zinc-700/10',
    title: 'Bot de consultas frecuentes',
    problem: 'El equipo responde siempre las mismas preguntas por mail o WhatsApp, cortando el flujo de trabajo.',
    solution: 'Bot simple que responde automáticamente consultas predefinidas, con derivación manual cuando es necesario.',
    techs: ['Python', 'Telegram Bot API'],
  },
  {
    tag: 'Web',
    tagStyle: 'text-zinc-400 border-zinc-700 bg-zinc-800/40',
    title: 'Landing page funcional',
    problem: 'El negocio no tiene presencia digital o tiene una web que no comunica bien lo que ofrece.',
    solution: 'Landing page limpia con información clara, formulario de contacto y botón de WhatsApp.',
    techs: ['React', 'Tailwind'],
  },
  {
    tag: 'Integración',
    tagStyle: 'text-orange-300 border-orange-400/20 bg-orange-400/5',
    title: 'Flujo formulario → planilla → mail',
    problem: 'Cada vez que alguien completa un formulario, alguien tiene que copiar esos datos manualmente a otro lado.',
    solution: 'Flujo automatizado que toma los datos del formulario, los carga en una planilla y notifica por mail.',
    techs: ['Python', 'Google Sheets API', 'SMTP'],
  },
  {
    tag: 'Panel interno',
    tagStyle: 'text-amber-300 border-amber-400/20 bg-amber-400/5',
    title: 'Panel de seguimiento simple',
    problem: 'El estado de las tareas o pedidos vive en varios lugares o en la cabeza de una sola persona.',
    solution: 'Interfaz web simple para registrar, consultar y seguir el estado de lo que pasa en la operación.',
    techs: ['React', 'Tailwind', 'local API'],
  },
]

export default function Portfolio() {
  return (
    <section id="proyectos" className="py-24 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="mb-14">
          <span className="section-label">Qué construyo</span>
          <h2 className="section-title">Tipos de proyectos</h2>
          <p className="section-subtitle max-w-xl">
            Ejemplos de soluciones que puedo desarrollar. Son tipos de proyectos reales,
            no casos de clientes. Cada uno parte de un problema concreto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {examples.map((p) => (
            <article key={p.title} className="card flex flex-col gap-4">

              <div className="flex items-center justify-between">
                <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${p.tagStyle}`}>
                  {p.tag}
                </span>
              </div>

              <h3 className="text-sm font-semibold text-white leading-snug">{p.title}</h3>

              <div className="space-y-2 flex-1">
                <div className="flex gap-2.5">
                  <span className="text-[10px] font-mono text-zinc-700 pt-0.5 shrink-0 w-16">Problema</span>
                  <p className="text-xs text-zinc-500 leading-relaxed">{p.problem}</p>
                </div>
                <div className="flex gap-2.5">
                  <span className="text-[10px] font-mono text-orange-600/50 pt-0.5 shrink-0 w-16">Solución</span>
                  <p className="text-xs text-zinc-400 leading-relaxed">{p.solution}</p>
                </div>
              </div>

              <div className="flex gap-1.5 flex-wrap pt-3 border-t border-zinc-800/60 mt-auto">
                {p.techs.map((t) => (
                  <span key={t} className="text-[10px] text-zinc-600 bg-zinc-800/60 px-2 py-0.5 rounded font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="text-zinc-700 text-xs mt-8 font-mono">
          ¿Tenés un proceso similar?{' '}
          <a href="#contacto" className="text-orange-600/60 hover:text-orange-500 underline transition-colors">
            Contame el problema.
          </a>
        </p>
      </div>
    </section>
  )
}
