const demos = [
  {
    sector: 'Servicios profesionales', title: 'Asesoramiento financiero',
    description: 'Una propuesta pensada para explicar servicios complejos, transmitir confianza y generar solicitudes de diagnóstico.',
    href: 'https://nuhe.github.io/majo-landing-page/#inicio', accent: 'from-violet-700 to-fuchsia-700',
  },
  {
    sector: 'Salud y bienestar', title: 'Asesoramiento en planes de salud',
    description: 'Una landing orientada a presentar alternativas, resolver preguntas frecuentes y recibir solicitudes de cotización.',
    href: 'https://nuhe.github.io/karina-landing-page/#inicio', accent: 'from-sky-700 to-blue-500',
  },
]

export default function Portfolio() {
  return (
    <section id="proyectos" className="py-24 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Landings demostrativas</h2>
          <p className="section-subtitle max-w-xl">Proyectos conceptuales creados para mostrar cómo una misma base se adapta al mensaje y la identidad de cada rubro.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {demos.map(demo => (
            <article key={demo.title} className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60">
              <div className={`h-52 bg-gradient-to-br ${demo.accent} p-7 flex flex-col justify-end`}>
                <div className="rounded-xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
                  <div className="h-2 w-20 rounded bg-white/50 mb-3" /><div className="h-5 w-4/5 rounded bg-white/90 mb-2" /><div className="h-2 w-full rounded bg-white/30" />
                </div>
              </div>
              <div className="p-7">
                <span className="text-[11px] font-mono text-orange-500 uppercase tracking-wider">Demo conceptual · {demo.sector}</span>
                <h3 className="text-xl font-bold text-white mt-3 mb-2">{demo.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-6">{demo.description}</p>
                <a href={demo.href} target="_blank" rel="noopener noreferrer" className="btn-secondary">Ver demo completa ↗</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
