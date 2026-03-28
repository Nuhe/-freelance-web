export default function CTASection() {
  return (
    <section className="py-24 bg-[#0c0c0c]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative border border-zinc-800/60 rounded-2xl p-10 md:p-16 overflow-hidden">

          {/* Glow de fondo — identidad fox */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,_rgba(234,88,12,0.06)_0%,_transparent_100%)]" />

          <div className="relative">
            {/* Acento de marca */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-0.5 bg-orange-600" />
              <span className="text-xs font-mono text-orange-600/60 tracking-widest uppercase">¿Listo para simplificar tu operación?</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight tracking-tight max-w-3xl">
              Si hoy perdés tiempo en tareas manuales que podrían funcionar solas,
              podemos construir una solución concreta para tu operación.
            </h2>

            <p className="text-zinc-500 text-sm mb-8 max-w-lg leading-relaxed">
              Contame qué proceso querés mejorar. Sin compromiso. En menos de 48 horas
              tenés una idea clara de qué se puede hacer y cómo.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contacto" className="btn-primary">
                Veamos cómo simplificar tu operación
              </a>
              <a href="#servicios" className="btn-secondary">
                Ver servicios
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
