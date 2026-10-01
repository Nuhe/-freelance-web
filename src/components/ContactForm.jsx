import { useState } from 'react'

const CONTACT_EMAIL = 'camilo.nestor.rodriguez@gmail.com'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity()
      return
    }
    const subject = `Consulta sobre ${form.service || 'servicios de FoxOps'}`
    const body = `Hola FoxOps!\n\nSoy ${form.name} (${form.email}).\n\nServicio: ${form.service || 'Sin especificar'}\n\nConsulta:\n${form.message}`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-white placeholder-zinc-700 focus:outline-none focus:border-orange-600/50 transition-colors text-sm font-mono'

  return (
    <section id="contacto" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_440px] gap-16 items-start">

          {/* ── Info de contacto ── */}
          <div>
            <span className="section-label">Empezá acá</span>
            <h2 className="section-title">Contame sobre tu negocio</h2>
            <p className="text-zinc-500 text-sm mb-10 leading-relaxed max-w-sm">
              Contame qué hacés y qué esperás conseguir con la página.
              Respondo en menos de 48 horas.
            </p>

            <div className="space-y-5">
              {[
                { label: 'Email', val: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
                { label: 'GitHub', val: 'github.com/Nuhe', href: 'https://github.com/Nuhe' },
              ].map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-4 group">
                  <span className="text-[10px] font-mono text-zinc-700 group-hover:text-orange-600/60 transition-colors pt-0.5 w-14 shrink-0 uppercase tracking-wider">
                    {item.label}
                  </span>
                  <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    {item.val}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-zinc-900">
              <p className="text-[11px] text-zinc-700 font-mono leading-relaxed">
                Respuesta en &lt; 48 horas.<br />
                Sin compromiso. Sin presupuesto sorpresa.
              </p>
            </div>
          </div>

          {/* ── Formulario ── */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-10 h-10 rounded-full bg-orange-600/10 border border-orange-600/30 flex items-center justify-center text-orange-500 text-lg mx-auto mb-4">✓</div>
                <h3 className="text-base font-semibold text-white mb-2">Revisá tu correo</h3>
                <p className="text-zinc-500 text-xs mb-6">Tu mensaje quedó preparado en tu aplicación de correo. Confirmá el envío desde allí.</p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary text-xs">
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="name" className="block text-[11px] font-mono text-zinc-600 mb-1.5 uppercase tracking-wider">
                    Nombre <span className="text-orange-600">*</span>
                  </label>
                  <input id="name" type="text" name="name" value={form.name}
                    onChange={handleChange} required placeholder="Tu nombre"
                    className={inputClass} />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[11px] font-mono text-zinc-600 mb-1.5 uppercase tracking-wider">
                    Email <span className="text-orange-600">*</span>
                  </label>
                  <input id="email" type="email" name="email" value={form.email}
                    onChange={handleChange} required placeholder="tu@email.com"
                    className={inputClass} />
                </div>

                <div>
                  <label htmlFor="service" className="block text-[11px] font-mono text-zinc-600 mb-1.5 uppercase tracking-wider">
                    Servicio de interés
                  </label>
                  <select id="service" name="service" value={form.service}
                    onChange={handleChange}
                    className={`${inputClass} text-zinc-400`}>
                    <option value="">— Seleccioná</option>
                    <option value="Plan Presencia">Plan Presencia</option>
                    <option value="Plan Gestionado">Plan Gestionado</option>
                    <option value="Pago único">Web con pago único</option>
                    <option value="No sé, necesito orientación">No sé, necesito orientación</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[11px] font-mono text-zinc-600 mb-1.5 uppercase tracking-wider">
                    Contame sobre tu negocio <span className="text-orange-600">*</span>
                  </label>
                  <textarea id="message" name="message" value={form.message}
                    onChange={handleChange} required rows={4}
                    placeholder="Qué ofrecés, a quién y qué debería hacer una persona al visitar tu página..."
                    className={`${inputClass} resize-none`} />
                </div>

                <button type="submit" className="btn-primary w-full justify-center py-3 text-sm">
                  Abrir correo
                </button>

                <p className="text-[10px] text-zinc-700 text-center font-mono">
                  Se abre tu aplicación de correo con el mensaje preparado
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
