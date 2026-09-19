const steps = [
  {
    number: '01',
    title: 'Entiendo el problema',
    desc: 'Conversamos sobre tu negocio, el público, el contenido disponible y la acción principal que querés generar.',
  },
  {
    number: '02',
    title: 'Propongo una solución concreta',
    desc: 'Definimos secciones, alcance, tiempos y costos antes de empezar. Sin sorpresas ni funcionalidades ambiguas.',
  },
  {
    number: '03',
    title: 'Desarrollo e implemento',
    desc: 'Construyo la landing, adapto el contenido, pruebo en distintos tamaños de pantalla y aplico las correcciones acordadas.',
  },
  {
    number: '04',
    title: 'Ajusto y acompaño',
    desc: 'Publico la página y comienza el acompañamiento: mantenimiento, medición, cambios incluidos y soporte técnico.',
  },
]

export default function Process() {
  return (
    <section id="proceso" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="mb-14">
          <span className="section-label">El proceso</span>
          <h2 className="section-title">Cómo trabajo</h2>
          <p className="section-subtitle">
            Un proceso breve y claro para pasar de la idea a una página publicada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="group">
              <div className="text-[3.5rem] font-black font-mono leading-none mb-5 select-none">
                <span className="text-zinc-900 group-hover:text-orange-600/20 transition-colors duration-300">
                  {step.number}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-10 border-t border-zinc-900">
          <p className="text-xs text-zinc-700 font-mono">
            El plazo habitual es de 7 a 14 días hábiles desde la recepción del material.
          </p>
        </div>
      </div>
    </section>
  )
}
