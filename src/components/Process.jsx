const steps = [
  {
    number: '01',
    title: 'Entiendo el problema',
    desc: 'Conversamos sobre qué te quita tiempo, qué falla y qué necesitás mejorar. Sin formularios ni demos genéricos: una charla directa sobre tu operación.',
  },
  {
    number: '02',
    title: 'Propongo una solución concreta',
    desc: 'Te presento qué se hace, cómo, en qué tiempo y a qué costo. Sin humo. Sin sorpresas. Con alcance claro desde el principio.',
  },
  {
    number: '03',
    title: 'Desarrollo e implemento',
    desc: 'Construyo la solución, la pruebo y la entrego funcionando. Te muestro cómo usarla antes de considerar terminado.',
  },
  {
    number: '04',
    title: 'Ajusto y acompaño',
    desc: 'Después de implementar, me quedo disponible. Si algo cambia o falla, lo resolvemos. El objetivo es que funcione de verdad.',
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
            Simple, claro y sin burocracia. Resolver un problema no debería ser
            otra fuente de fricción.
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
            Sin procesos de agencia. Sin capas de aprobación. Directo al problema.
          </p>
        </div>
      </div>
    </section>
  )
}
