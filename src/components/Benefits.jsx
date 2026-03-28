const benefits = [
  {
    icon: '⏱️',
    title: 'Ahorrás tiempo real',
    desc: 'Las tareas repetitivas corren solas. Tu equipo trabaja en lo que realmente genera valor.',
  },
  {
    icon: '✅',
    title: 'Menos errores operativos',
    desc: 'Los procesos automatizados no se equivocan. Menos re-trabajo, menos correcciones, más confianza.',
  },
  {
    icon: '📈',
    title: 'Más capacidad sin más personal',
    desc: 'Escalás el volumen de trabajo sin necesitar contratar más gente para las mismas tareas.',
  },
  {
    icon: '🎯',
    title: 'Mejor atención a clientes',
    desc: 'Tu equipo deja de responder lo mismo y se enfoca en los casos que realmente importan.',
  },
  {
    icon: '🗃️',
    title: 'Orden y visibilidad',
    desc: 'Tus procesos documentados, integrados y con toda la información centralizada en un lugar.',
  },
  {
    icon: '💼',
    title: 'Imagen más profesional',
    desc: 'Una web sólida y herramientas bien implementadas transmiten confianza y seriedad ante clientes.',
  },
  {
    icon: '🔧',
    title: 'Herramientas que se adaptan a vos',
    desc: 'Nada genérico. Soluciones construidas específicamente para tu operación y tu equipo.',
  },
  {
    icon: '🤝',
    title: 'Acompañamiento post-entrega',
    desc: 'No desaparezco al terminar. Ajusto, mejoro y acompaño según lo que necesite tu negocio.',
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="section-title">Qué ganás con cada solución</h2>
          <p className="section-subtitle mx-auto">
            Resultados concretos. No promesas de transformación digital, sino mejoras reales en tu
            operación diaria.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b) => (
            <div key={b.title} className="card">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xl mb-4">
                <span role="img" aria-label={b.title}>{b.icon}</span>
              </div>
              <h3 className="font-semibold text-white mb-2">{b.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
