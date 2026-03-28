export default function CTASection() {
  return (
    <section className="py-24 bg-[#0c0c0c]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative border border-zinc-800/60 rounded-2xl p-10 md:p-16 overflow-hidden">

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,_rgba(234,88,12,0.05)_0%,_transparent_100%)]" />

          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-0.5 bg-orange-600" />
              <span className="text-xs font-mono text-orange-600/60 tracking-widest uppercase">¿Tiene sentido hablar?</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight tracking-tight max-w-2xl">
              Si tenés una tarea repetitiva o un proceso manual que te gustaría mejorar,
              puedo ayudarte a ver qué se puede hacer.
            </h2>

            <p className="text-zinc-500 text-sm mb-8 max-w-lg leading-relaxed">
              Contame cómo funciona el proceso. Sin compromiso ni presupuestos imaginarios.
              Si puedo ayudarte, te digo cómo. Si no, también.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contacto" className="btn-primary">
                Contame qué proceso querés mejorar
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
