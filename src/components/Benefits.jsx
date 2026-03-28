const benefits = [
  { label: 'Menos tiempo perdido', detail: 'Las tareas repetitivas corren solas. Tu equipo trabaja en lo que genera valor real.' },
  { label: 'Menos errores operativos', detail: 'Los procesos automatizados no cometen errores humanos. Menos re-trabajo, más confianza.' },
  { label: 'Más capacidad, mismo equipo', detail: 'Escalás el volumen sin sumar personas para hacer las mismas tareas de siempre.' },
  { label: 'Atención más rápida', detail: 'Los bots y automatizaciones responden al instante, sin depender de que alguien esté disponible.' },
  { label: 'Todo conectado y visible', detail: 'Tus sistemas integrados, tus datos centralizados, tu operación con visibilidad real.' },
  { label: 'Imagen más profesional', detail: 'Una web sólida y herramientas bien implementadas transmiten seriedad antes de que digas una palabra.' },
  { label: 'Soluciones que se adaptan a vos', detail: 'Nada genérico. Cada herramienta está pensada para tu flujo, tu equipo y tu contexto.' },
  { label: 'Soporte después de entregar', detail: 'No desaparezco al terminar. Si algo falla o cambia, estoy disponible para ajustar.' },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="mb-14">
          <span className="section-label">Qué ganás</span>
          <h2 className="section-title">Resultados concretos</h2>
          <p className="section-subtitle">
            No promesas de transformación digital. Mejoras reales y medibles en tu operación.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800/40 rounded-xl overflow-hidden border border-zinc-800/40">
          {benefits.map((b) => (
            <div
              key={b.label}
              className="bg-zinc-950 p-5 hover:bg-zinc-900/80 transition-colors group"
            >
              <div className="w-5 h-0.5 bg-orange-600/50 mb-3 group-hover:w-8 group-hover:bg-orange-600 transition-all duration-300 rounded-full" />
              <h3 className="text-sm font-semibold text-zinc-200 mb-1.5">{b.label}</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">{b.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
