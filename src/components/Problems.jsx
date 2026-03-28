const problems = [
  {
    icon: '⏱️',
    title: 'Horas perdidas en tareas manuales',
    desc: 'Tu equipo dedica tiempo valioso a cargar datos, copiar información y repetir procesos que podrían automatizarse.',
  },
  {
    icon: '❌',
    title: 'Errores por operación manual',
    desc: 'Los procesos hechos a mano generan inconsistencias, duplicados y errores difíciles de rastrear y corregir.',
  },
  {
    icon: '📨',
    title: 'Consultas que saturan al equipo',
    desc: 'Siempre las mismas preguntas, los mismos mails, las mismas respuestas. Tiempo que se va en atención repetitiva.',
  },
  {
    icon: '🗂️',
    title: 'Herramientas desconectadas entre sí',
    desc: 'Trabajás con planillas, sistemas y apps que no se comunican. Todo termina siendo manual de todas formas.',
  },
  {
    icon: '📉',
    title: 'Sin visibilidad de tu operación',
    desc: 'No tenés un lugar centralizado donde ver el estado real de tu negocio. Las decisiones se toman a ciegas.',
  },
  {
    icon: '🌐',
    title: 'Sin presencia digital profesional',
    desc: 'Tu web no existe o no te representa bien. Perdés credibilidad y oportunidades antes de abrir la boca.',
  },
  {
    icon: '🔄',
    title: 'Procesos que no escalan',
    desc: 'Para hacer más trabajo, necesitás más gente. Tus procesos actuales no te dejan crecer sin aumentar el costo.',
  },
  {
    icon: '📋',
    title: 'Todo depende de una sola persona',
    desc: 'Si esa persona no está, el proceso se para. La operación no puede depender de una sola cabeza.',
  },
]

export default function Problems() {
  return (
    <section id="problemas" className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="section-title">¿Te identificás con alguno de estos problemas?</h2>
          <p className="section-subtitle mx-auto">
            Son los dolores más comunes en negocios que todavía no automatizaron sus procesos. Si
            uno de estos te suena, podemos trabajarlo juntos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors"
            >
              <span className="text-2xl mb-3 block" role="img" aria-label={p.title}>
                {p.icon}
              </span>
              <h3 className="font-semibold text-white text-sm mb-2">{p.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Si alguno de estos problemas te representa, podemos resolverlo.
          </p>
          <a href="#contacto" className="btn-primary">
            Quiero encontrar una solución
          </a>
        </div>
      </div>
    </section>
  )
}
