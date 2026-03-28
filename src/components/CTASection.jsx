export default function CTASection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/5 border border-blue-500/20 rounded-2xl p-10 md:p-16">
          <span className="text-sm font-medium text-blue-400 mb-4 block tracking-wide uppercase">
            ¿Listo para mejorar tu operación?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Si tu negocio pierde tiempo en tareas manuales o procesos que no funcionan bien, tengo
            una solución concreta para vos
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Contame qué problema tenés. Sin compromiso. En menos de 48 horas te digo si puedo
            ayudarte y qué podemos hacer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contacto" className="btn-primary text-base px-8 py-4">
              Hablar por WhatsApp
            </a>
            <a href="#servicios" className="btn-secondary text-base px-8 py-4">
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
