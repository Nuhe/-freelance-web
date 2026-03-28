const benefits = [
  {
    label: 'Menos tiempo en tareas repetitivas',
    detail: 'Las tareas que siempre hace una persona de forma manual pueden correr solas con un script.',
  },
  {
    label: 'Menos errores de carga',
    detail: 'La carga manual tiene errores. Un proceso automatizado aplica siempre las mismas reglas.',
  },
  {
    label: 'Datos más ordenados',
    detail: 'La información se procesa, organiza y guarda de forma consistente, sin depender de quién lo hace.',
  },
  {
    label: 'Menos pasos intermedios',
    detail: 'Si algo puede ir directo de un sistema a otro sin intervención, lo automatizamos.',
  },
  {
    label: 'Herramientas que se adaptan a vos',
    detail: 'No es una plantilla. Se construye para tu proceso, tu flujo y tu equipo.',
  },
  {
    label: 'Mejor imagen profesional',
    detail: 'Una web clara o un proceso prolijo transmiten seriedad antes de que digas una palabra.',
  },
  {
    label: 'Proceso claro y sin sorpresas',
    detail: 'Entiendo el problema, te cuento qué propongo, lo construimos y lo ajustamos si hace falta.',
  },
  {
    label: 'Solución que se usa',
    detail: 'No entrego proyectos que quedan archivados. Si no es útil, no vale la pena construirlo.',
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="mb-14">
          <span className="section-label">Qué mejora</span>
          <h2 className="section-title">Lo que cambia</h2>
          <p className="section-subtitle">
            Cambios concretos en el trabajo del día a día, no transformaciones abstractas.
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
