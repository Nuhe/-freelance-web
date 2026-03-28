import FoxMark from './FoxMark'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-zinc-950">

      {/* Glow de fondo — sutil, naranja cálido */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_20%,_rgba(234,88,12,0.07)_0%,_transparent_100%)]" />

      {/* Watermark fox — marca de agua sutil en el fondo derecho */}
      <div className="absolute right-[-4rem] top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.035]">
        <FoxMark className="w-[480px] h-[560px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 lg:py-0 w-full">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center">

          {/* ── Columna izquierda: copy ── */}
          <div>
            {/* Pill de servicio */}
            <div className="inline-flex items-center gap-2 border border-orange-600/20 bg-orange-600/5 rounded-full px-3.5 py-1 text-xs text-orange-500/80 mb-8 font-mono tracking-widest">
              <span className="w-1 h-1 rounded-full bg-orange-600 animate-pulse" />
              Automatización · Bots IA · Integraciones
            </div>

            {/* Headline principal */}
            <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-white leading-[1.05] tracking-tight mb-5">
              Procesos que{' '}
              <span className="text-orange-600">funcionan</span>
              {' '}solos.
              <br />
              <span className="text-zinc-400">Equipos que trabajan mejor.</span>
            </h1>

            {/* Subtítulo enfocado */}
            <p className="text-base text-zinc-400 mb-4 leading-relaxed max-w-[480px]">
              Automatización, IA e integraciones para pymes, consultorios y equipos
              administrativos que quieren reducir la carga manual y operar con más eficiencia.
            </p>

            {/* Tipos de cliente — ancla de identificación rápida */}
            <div className="flex flex-wrap gap-2 mb-10">
              {['Pymes', 'Consultorios', 'Estudios contables', 'Equipos administrativos'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-zinc-600 border border-zinc-800 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contacto" className="btn-primary">
                Contame tu proceso
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#servicios" className="btn-secondary">
                Ver servicios
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 mt-12 pt-10 border-t border-zinc-900">
              {[
                { value: '100%', label: 'A medida' },
                { value: '48hs', label: 'Primera respuesta' },
                { value: '0', label: 'Plantillas genéricas' },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8">
                  <div>
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-[11px] text-zinc-600 mt-0.5 font-mono leading-snug">{stat.label}</div>
                  </div>
                  {i < 2 && <div className="w-px h-7 bg-zinc-800/70" />}
                </div>
              ))}
            </div>
          </div>

          {/* ── Columna derecha: terminal fox ── */}
          <div className="hidden lg:block">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">

              {/* Barra de la terminal */}
              <div className="flex items-center gap-1.5 px-5 py-3.5 border-b border-zinc-800/60 bg-zinc-900">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
                <span className="ml-auto flex items-center gap-1.5">
                  <FoxMark className="w-3.5 h-4 opacity-60" />
                  <span className="text-xs text-zinc-600 font-mono">foxops — análisis</span>
                </span>
              </div>

              {/* Contenido de la terminal */}
              <div className="p-6 font-mono text-sm space-y-3.5">
                <div className="flex gap-2.5 text-zinc-500">
                  <span className="text-orange-600 select-none shrink-0">❯</span>
                  <span>analizar-proceso <span className="text-zinc-400">"administración"</span></span>
                </div>

                <div className="text-zinc-500 pl-5 text-xs">→ Escaneando flujo de trabajo...</div>

                <div className="space-y-2 pl-5 border-l border-zinc-800">
                  <p className="text-zinc-300 text-xs">
                    <span className="text-amber-500 mr-2">✓</span>14 tareas manuales detectadas
                  </p>
                  <p className="text-zinc-300 text-xs">
                    <span className="text-amber-500 mr-2">✓</span>8.5 hs/mes de trabajo repetitivo
                  </p>
                  <p className="text-zinc-300 text-xs">
                    <span className="text-amber-500 mr-2">✓</span>3 sistemas sin conectar entre sí
                  </p>
                </div>

                <div className="pt-1 border-t border-zinc-800/60">
                  <p className="text-xs text-zinc-500">⚡ Propuesta generada:</p>
                  <p className="text-orange-500 font-semibold mt-1">3 automatizaciones → 7 hs/mes ahorradas</p>
                </div>

                <div className="flex items-center gap-1.5 pt-0.5">
                  <span className="text-orange-600 select-none">❯</span>
                  <span className="w-1.5 h-3.5 bg-orange-600/50 animate-pulse rounded-sm" />
                </div>
              </div>
            </div>

            {/* Badge debajo del terminal */}
            <div className="flex justify-between items-center mt-3 px-1">
              <span className="text-[11px] text-zinc-700 font-mono">Sin compromiso. Sin configuración previa.</span>
              <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 rounded-lg px-2.5 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-[11px] text-zinc-500 font-mono">Análisis gratuito</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
