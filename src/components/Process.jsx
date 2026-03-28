const steps = [
  {
    number: '01',
    title: 'Entiendo tu problema',
    desc: 'Conversamos sobre qué te quita tiempo, qué falla y qué necesitás mejorar. Una charla directa sobre tu operación real.',
  },
  {
    number: '02',
    title: 'Propongo una solución',
    desc: 'Te presento una propuesta concreta: qué se hace, con qué tecnología, en qué tiempo y a qué costo. Sin sorpresas.',
  },
  {
    number: '03',
    title: 'Desarrollo e implemento',
    desc: 'Construyo la solución, la pruebo y la entrego funcionando. Te muestro cómo usarla antes de dar por terminado.',
  },
  {
    number: '04',
    title: 'Acompaño y ajusto',
    desc: 'Me quedo disponible para ajustes y mejoras. La solución tiene que funcionar en tu contexto real, no solo en teoría.',
  },
]

export default function Process() {
  return (
    <section id="proceso" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <h2 className="section-title">Cómo trabajo</h2>
          <p className="section-subtitle">
            Simple, claro y sin burocracia. Resolver un problema no debería ser otra fuente de estrés.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number}>
              <div className="text-5xl font-black text-orange-500/20 font-mono leading-none mb-4 select-none">
                {step.number}
              </div>
              <h3 className="font-semibold text-white mb-2 text-sm">{step.title}</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
