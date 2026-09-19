import FoxMark from './FoxMark'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-zinc-950">

      {/* Glow sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_20%,_rgba(234,88,12,0.06)_0%,_transparent_100%)]" />

      {/* Watermark fox */}
      <div className="absolute right-[-4rem] top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.035]">
        <FoxMark className="w-[480px] h-[560px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 lg:py-0 w-full">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center">

          {/* Columna izquierda */}
          <div>
            {/* Pill */}
            <div className="inline-flex items-center gap-2 border border-orange-600/20 bg-orange-600/5 rounded-full px-3.5 py-1 text-xs text-orange-500/80 mb-8 font-mono tracking-widest">
              <span className="w-1 h-1 rounded-full bg-orange-600 animate-pulse" />
              Diseño · Publicación · Medición · Soporte
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-white leading-[1.05] tracking-tight mb-5">
              Tu negocio merece{' '}
              <span className="text-orange-600">una web profesional.</span>
              <br />
              <span className="text-zinc-400">Y que no quede abandonada.</span>
            </h1>

            <p className="text-base text-zinc-400 mb-4 leading-relaxed max-w-[480px]">
              Diseño, publico y mantengo la landing de tu negocio. Con SEO técnico,
              medición de contactos y acompañamiento mensual.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {['Profesionales', 'Comercios', 'Consultorios', 'Emprendimientos'].map((tag) => (
                <span key={tag} className="text-xs text-zinc-600 border border-zinc-800 rounded-full px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contacto" className="btn-primary">
                Quiero mi landing
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#servicios" className="btn-secondary">
                Ver qué incluye
              </a>
            </div>
          </div>

          {/* Vista simplificada de una landing */}
          <div className="hidden lg:block">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl shadow-black/50">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-950">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                </div>
                <span className="text-[11px] text-zinc-600 font-mono ml-1">tu-negocio.com.ar</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="h-3 w-28 rounded bg-orange-600/70" />
                <div className="h-7 w-4/5 rounded bg-zinc-700" />
                <div className="h-3 w-full rounded bg-zinc-800" />
                <div className="h-3 w-3/4 rounded bg-zinc-800" />
                <div className="grid grid-cols-3 gap-3 pt-3">
                  {[1, 2, 3].map((item) => <div key={item} className="h-20 rounded-lg border border-zinc-800 bg-zinc-950" />)}
                </div>
                <div className="inline-flex rounded-lg bg-orange-600 px-4 py-2 text-xs font-semibold text-white">Contactar por WhatsApp</div>
              </div>
            </div>

            {/* Stats — honestos */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { val: 'Responsive', sub: 'móvil y desktop' },
                { val: 'SEO', sub: 'base técnica' },
                { val: 'Medible', sub: 'eventos clave' },
              ].map((s) => (
                <div key={s.val} className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-3 text-center">
                  <div className="text-sm font-bold text-white">{s.val}</div>
                  <div className="text-[10px] text-zinc-600 font-mono mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
