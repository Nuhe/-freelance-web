const questions = [
  ['¿Qué necesito entregar para empezar?', 'Información del negocio, servicios, datos de contacto, logotipo si tenés e imágenes propias. Si falta algo, definimos qué material es imprescindible antes de comenzar.'],
  ['¿El dominio queda a mi nombre?', 'Sí. El dominio pertenece al cliente. Puedo ayudarte con la configuración técnica, pero no retengo tu identidad digital.'],
  ['¿Qué significa una modificación pequeña?', 'Cambiar un texto, enlace, teléfono, horario o reemplazar hasta tres imágenes. Nuevas secciones y rediseños se cotizan por separado.'],
  ['¿Cómo puedo conocer los resultados?', 'Configuramos la medición de visitas y contactos importantes para que recibas un resumen mensual claro sobre el funcionamiento de tu web.'],
  ['¿Puedo contratar sin mensualidad?', 'Sí. Existe una modalidad de pago único con mantenimiento opcional. La cotización depende del alcance de la web.'],
]

export default function FAQ() {
  return (
    <section id="preguntas" className="py-24 bg-[#0c0c0c]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-12"><span className="section-label">Antes de empezar</span><h2 className="section-title">Preguntas frecuentes</h2></div>
        <div className="space-y-3">
          {questions.map(([question, answer]) => (
            <details key={question} className="group rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
              <summary className="cursor-pointer list-none font-semibold text-zinc-200 flex justify-between gap-4">{question}<span className="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary>
              <p className="text-sm text-zinc-500 leading-relaxed mt-4 max-w-2xl">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
