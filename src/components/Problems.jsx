const problems = [
  {
    title: 'Tareas repetitivas que siempre hace una persona a mano',
    desc: 'Copiar datos, completar planillas, armar reportes. Trabajo que podría automatizarse pero que todavía consume tiempo de alguien.',
  },
  {
    title: 'Errores frecuentes en carga manual de datos',
    desc: 'Un número mal copiado, una fila que no se pegó, un campo que se olvidó. Los errores manuales son difíciles de rastrear y corregir.',
  },
  {
    title: 'Información que hay que buscar a mano porque no hay exportación directa',
    desc: 'Datos que están en un sistema web, en un portal o en un PDF y que para usarlos hay que copiarlos de uno en uno.',
  },
  {
    title: 'Las mismas consultas respondidas una y otra vez',
    desc: 'Preguntas sobre horarios, precios, estados de pedidos. Atención repetitiva que interrumpe el trabajo del equipo.',
  },
  {
    title: 'Herramientas que no se conectan entre sí',
    desc: 'El formulario va por un lado, la planilla por otro, el mail por un tercero. Nada está conectado y el paso entre herramientas siempre es manual.',
  },
  {
    title: 'Sin web o con una web que no representa bien lo que hacés',
    desc: 'La primera impresión importa. Sin presencia digital o con una web desactualizada, es difícil generar confianza antes de hablar.',
  },
  {
    title: 'Procesos que dependen de que una persona esté disponible',
    desc: 'Si esa persona falta o cambia, el proceso se traba. La operación no debería depender de que alguien recuerde cómo hacerlo.',
  },
  {
    title: 'Trabajo desordenado entre mails, planillas y sistemas',
    desc: 'La información está repartida en varios lugares sin un criterio claro. Encontrar lo que se necesita toma más tiempo del que debería.',
  },
]

export default function Problems() {
  return (
    <section id="problemas" className="py-24 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="mb-14">
          <span className="section-label">¿Te identificás?</span>
          <h2 className="section-title">Problemas que puedo ayudar a resolver</h2>
          <p className="section-subtitle">
            Situaciones comunes en equipos y negocios donde la automatización o una
            herramienta simple puede marcar la diferencia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
          {problems.map((p, i) => (
            <div key={p.title} className="flex gap-5 group">
              <span className="text-[11px] font-mono text-zinc-800 group-hover:text-orange-600/30 transition-colors pt-1 shrink-0 tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-zinc-300 mb-1.5 leading-snug group-hover:text-white transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-zinc-900">
          <p className="text-sm text-zinc-500">
            Si alguno de estos te describe,{' '}
            <a href="#contacto" className="text-orange-600/70 hover:text-orange-500 underline underline-offset-2 transition-colors">
              contame cómo funciona tu proceso actual
            </a>{' '}
            y vemos qué se puede hacer.
          </p>
        </div>
      </div>
    </section>
  )
}
