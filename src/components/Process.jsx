const steps = [
  {
    number: '01',
    icon: '🎯',
    title: 'Entiendo tu problema',
    desc: 'Conversamos sobre qué te quita tiempo, qué falla y qué necesitás mejorar. Sin formularios genéricos: una charla directa sobre tu operación real.',
  },
  {
    number: '02',
    icon: '📐',
    title: 'Propongo una solución',
    desc: 'Te presento una propuesta concreta: qué se va a hacer, con qué tecnología, en qué tiempo y a qué costo. Sin sorpresas ni letra chica.',
  },
  {
    number: '03',
    icon: '⚙️',
    title: 'Desarrollo e implemento',
    desc: 'Construyo la solución, la pruebo a fondo y la entrego funcionando. Te muestro cómo usarla antes de dar por terminado.',
  },
  {
    number: '04',
    icon: '🤝',
    title: 'Acompaño y ajusto',
    desc: 'Me quedo disponible para ajustes, mejoras y soporte. La solución tiene que funcionar en tu contexto real, no solo en teoría.',
  },
]

export default function Process() {
  return (
    <section id="proceso" className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="section-title">Cómo trabajo</h2>
          <p className="section-subtitle mx-auto">
            Un proceso simple, claro y sin burocracia. Porque resolver un problema no debería ser
            otra fuente de estrés.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative">
              {/* Connector line (desktop only) */}
              {idx < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-6 left-[calc(100%_-_1rem)] w-8 h-px bg-gradient-to-r from-gray-700 to-transparent z-0"
                  aria-hidden="true"
                />
              )}

              <div className="relative z-10 bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/40 transition-colors h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-mono font-bold text-blue-500/40">
                    {step.number}
                  </span>
                  <span className="text-2xl" role="img" aria-label={step.title}>
                    {step.icon}
                  </span>
                </div>
                <h3 className="font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
