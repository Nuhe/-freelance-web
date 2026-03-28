const problems = [
  {
    title: 'Horas perdidas en tareas manuales',
    desc: 'Tu equipo carga datos, copia información y repite procesos que deberían correr solos.',
  },
  {
    title: 'Errores por operación humana',
    desc: 'Los procesos manuales generan inconsistencias y errores difíciles de rastrear.',
  },
  {
    title: 'Consultas que saturan al equipo',
    desc: 'Siempre las mismas preguntas. Tiempo que se va en atención que podría automatizarse.',
  },
  {
    title: 'Herramientas que no se comunican',
    desc: 'Planillas, sistemas y apps desconectadas. Todo termina siendo manual de todas formas.',
  },
  {
    title: 'Sin visibilidad de la operación',
    desc: 'No tenés un lugar donde ver qué pasa en tu negocio. Las decisiones se toman a ciegas.',
  },
  {
    title: 'Sin presencia digital profesional',
    desc: 'Tu web no existe o no te representa. Perdés oportunidades antes de abrir la boca.',
  },
  {
    title: 'Procesos que no escalan',
    desc: 'Para hacer más trabajo, necesitás más gente. El costo crece junto con el volumen.',
  },
  {
    title: 'Todo depende de una sola persona',
    desc: 'Si esa persona no está, el proceso se para. La operación no puede depender de una cabeza.',
  },
]

export default function Problems() {
  return (
    <section id="problemas" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <h2 className="section-title">¿Te suena alguno de estos?</h2>
          <p className="section-subtitle">
            Son los problemas más comunes en negocios que todavía no automatizaron sus procesos.
            Si uno resuena, podemos resolverlo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
          {problems.map((p, i) => (
            <div key={p.title} className="flex gap-4">
              <span className="text-xs font-mono text-orange-500/40 pt-1 w-6 shrink-0 select-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">{p.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-10 border-t border-zinc-900 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-zinc-600 text-sm">
            Si alguno de estos problemas te representa, tengo una solución concreta.
          </p>
          <a href="#contacto" className="btn-primary shrink-0 text-sm py-2.5 px-5">
            Hablemos
          </a>
        </div>
      </div>
    </section>
  )
}
