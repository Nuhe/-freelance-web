export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(59,130,246,0.12)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(6,182,212,0.06)_0%,_transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-sm text-blue-400 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Automatización · IA · Desarrollo Web
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Tu negocio puede{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                trabajar mejor
              </span>{' '}
              con menos esfuerzo
            </h1>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Desarrollo automatizaciones, bots con IA y soluciones web para que vos y tu equipo
              dejen de perder horas en tareas manuales y procesos desordenados.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="btn-primary">
                Hablemos de tu proyecto
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#servicios" className="btn-secondary">
                Ver servicios
              </a>
            </div>

            <div className="flex items-center gap-6 mt-10 pt-10 border-t border-gray-800">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-xs text-gray-500 mt-0.5">Proyectos</div>
              </div>
              <div className="w-px h-10 bg-gray-800" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-gray-500 mt-0.5">A medida</div>
              </div>
              <div className="w-px h-10 bg-gray-800" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">48hs</div>
                <div className="text-xs text-gray-500 mt-0.5">Respuesta</div>
              </div>
            </div>
          </div>

          {/* Right: terminal mockup */}
          <div className="hidden lg:block">
            <div className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/5">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-700 bg-gray-800/50">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs text-gray-500 font-mono">foxops — automatización activa</span>
              </div>

              {/* Terminal body */}
              <div className="p-6 font-mono text-sm space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 shrink-0">→</span>
                  <span className="text-gray-300">Procesando datos del mes...</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 shrink-0">✓</span>
                  <span className="text-gray-300">847 registros cargados automáticamente</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 shrink-0">✓</span>
                  <span className="text-gray-300">Reporte mensual generado y enviado</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 shrink-0">✓</span>
                  <span className="text-gray-300">12 consultas respondidas por el bot</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 shrink-0">⚡</span>
                  <span className="text-cyan-300">
                    Tiempo ahorrado este mes:{' '}
                    <strong className="text-white">18 horas</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-blue-400 font-mono">$</span>
                  <span className="text-gray-500 animate-pulse">█</span>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="mt-4 flex justify-end">
              <div className="bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-gray-300">Sin intervención manual</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
