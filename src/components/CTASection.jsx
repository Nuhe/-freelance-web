export default function CTASection() {
  return (
    <section className="py-24 bg-[#0d0d0d]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="border border-zinc-800 rounded-2xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.05)_0%,_transparent_70%)]" />
          <div className="relative">
            <div className="w-8 h-0.5 bg-orange-500 mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight max-w-3xl">
              Si tu negocio pierde tiempo en procesos que podrían funcionar solos,
              tengo una solución concreta para vos
            </h2>
            <p className="text-zinc-500 text-base mb-8 max-w-xl">
              Contame qué problema tenés. Sin compromiso. En menos de 48 horas te digo
              si puedo ayudarte y qué podemos hacer.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contacto" className="btn-primary">
                Hablar por WhatsApp
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
