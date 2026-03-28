const benefits = [
  { title: 'Ahorrás tiempo real', desc: 'Las tareas repetitivas corren solas. Tu equipo trabaja en lo que genera valor.' },
  { title: 'Menos errores operativos', desc: 'Los procesos automatizados no se equivocan. Menos re-trabajo, más confianza.' },
  { title: 'Más capacidad sin más personal', desc: 'Escalás el volumen sin necesitar contratar más gente para las mismas tareas.' },
  { title: 'Mejor atención al cliente', desc: 'Tu equipo deja de responder lo mismo y se enfoca en los casos que importan.' },
  { title: 'Orden y visibilidad', desc: 'Tus procesos documentados e integrados, con la información centralizada.' },
  { title: 'Imagen profesional', desc: 'Una web sólida y herramientas bien implementadas transmiten seriedad y confianza.' },
  { title: 'Herramientas a medida', desc: 'Nada genérico. Todo construido específicamente para tu operación.' },
  { title: 'Acompañamiento real', desc: 'No desaparezco al terminar. Ajusto, mejoro y acompaño lo que necesites.' },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <h2 className="section-title">Qué ganás</h2>
          <p className="section-subtitle">
            Resultados concretos en tu operación diaria. No promesas de transformación digital.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b) => (
            <div key={b.title} className="group">
              <div className="w-1 h-4 bg-orange-500 mb-4 rounded-full group-hover:h-6 transition-all duration-300" />
              <h3 className="font-semibold text-white text-sm mb-2">{b.title}</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
