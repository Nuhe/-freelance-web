export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(249,115,22,0.09)_0%,_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(245,158,11,0.05)_0%,_transparent_55%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="inline-flex items-center gap-2 border border-orange-500/20 bg-orange-500/5 rounded-full px-3 py-1 text-xs text-orange-400 mb-8 font-mono tracking-widest uppercase">
              <span className="w-1 h-1 rounded-full bg-orange-500 animate-pulse" />
              Automatización · IA · Web
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
              Tu negocio,{' '}
              <span className="text-orange-500">sin</span>
              {' '}trabajo
              <br />manual
            </h1>

            <p className="text-base text-zinc-400 mb-10 leading-relaxed max-w-sm">
              Automatizaciones, bots con IA y soluciones web para que tu equipo
              deje de perder horas en tareas que se pueden resolver con código.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contacto" className="btn-primary">
                Hablemos de tu proyecto
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#servicios" className="btn-secondary">
                Ver servicios
              </a>
            </div>

            <div className="flex items-center gap-8 mt-12 pt-12 border-t border-zinc-900">
              {[
                { value: '10+', label: 'Proyectos' },
                { value: '100%', label: 'A medida' },
                { value: '48hs', label: 'Respuesta' },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8">
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-zinc-600 mt-0.5 font-mono tracking-wider">{stat.label}</div>
                  </div>
                  {i < 2 && <div className="w-px h-8 bg-zinc-800" />}
                </div>
              ))}
            </div>
          </div>

          {/* Terminal mockup */}
          <div className="hidden lg:block">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
              <div className="flex items-center gap-1.5 px-5 py-3.5 border-b border-zinc-800">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="ml-4 text-xs text-zinc-600 font-mono">foxops — automatización</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-4">
                <div className="flex gap-2">
                  <span className="text-orange-500 select-none">❯</span>
                  <span className="text-zinc-400">run automation --month=marzo</span>
                </div>
                <div className="space-y-2 pl-4 border-l border-zinc-800">
                  <p className="text-zinc-300">
                    <span className="text-amber-400 mr-2">✓</span>847 registros procesados
                  </p>
                  <p className="text-zinc-300">
                    <span className="text-amber-400 mr-2">✓</span>Reporte generado y enviado
                  </p>
                  <p className="text-zinc-300">
                    <span className="text-amber-400 mr-2">✓</span>12 consultas respondidas
                  </p>
                </div>
                <div className="pt-1 text-orange-400 font-semibold">
                  ⚡ 18 horas ahorradas este mes
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-orange-500 select-none">❯</span>
                  <span className="w-2 h-4 bg-orange-500/50 animate-pulse rounded-sm" />
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-3">
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-zinc-500 font-mono">Sin intervención manual</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
