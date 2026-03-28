import { useState } from 'react'

const WHATSAPP_NUMBER = '541134287724'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Hola FoxOps! Soy ${form.name}.\n\nServicio: ${form.service || 'Sin especificar'}\nEmail: ${form.email}\n\n${form.message}`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank')
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-white placeholder-zinc-700 focus:outline-none focus:border-orange-500/60 transition-colors text-sm font-mono'

  return (
    <section id="contacto" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div>
            <div className="w-8 h-0.5 bg-orange-500 mb-6" />
            <h2 className="section-title">Hablemos</h2>
            <p className="text-zinc-500 text-sm mb-10 leading-relaxed max-w-sm">
              Contame brevemente tu problema. Respondé en menos de 48 horas
              con una idea concreta de cómo resolverlo.
            </p>

            <div className="space-y-6">
              {[
                { label: 'WhatsApp', value: '+54 11 3428-7724', href: `https://wa.me/${WHATSAPP_NUMBER}` },
                { label: 'Email', value: 'contacto@foxops.dev', href: 'mailto:contacto@foxops.dev' },
                { label: 'GitHub', value: 'github.com/Nuhe', href: 'https://github.com/Nuhe' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <span className="text-xs font-mono text-zinc-600 group-hover:text-orange-500 transition-colors pt-0.5 w-16 shrink-0">
                    {item.label}
                  </span>
                  <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">
                    {item.value}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-4xl mb-4 text-orange-500">✓</div>
                <h3 className="text-lg font-semibold text-white mb-2">Redirigiendo a WhatsApp</h3>
                <p className="text-zinc-500 text-sm mb-6">Si no se abrió, hacé clic acá:</p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary text-sm">
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-zinc-500 mb-1.5">
                    Nombre <span className="text-orange-500">*</span>
                  </label>
                  <input
                    id="name" type="text" name="name" value={form.name}
                    onChange={handleChange} required placeholder="Tu nombre"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-zinc-500 mb-1.5">
                    Email <span className="text-orange-500">*</span>
                  </label>
                  <input
                    id="email" type="email" name="email" value={form.email}
                    onChange={handleChange} required placeholder="tu@email.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-mono text-zinc-500 mb-1.5">
                    Servicio
                  </label>
                  <select
                    id="service" name="service" value={form.service}
                    onChange={handleChange}
                    className={`${inputClass} text-zinc-400`}
                  >
                    <option value="">— Seleccioná</option>
                    <option value="Automatización de tareas">Automatización de tareas</option>
                    <option value="Bot o asistente IA">Bot o asistente IA</option>
                    <option value="Desarrollo web">Desarrollo web</option>
                    <option value="Integración de sistemas">Integración de sistemas</option>
                    <option value="No sé, necesito orientación">No sé, necesito orientación</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-zinc-500 mb-1.5">
                    Tu consulta <span className="text-orange-500">*</span>
                  </label>
                  <textarea
                    id="message" name="message" value={form.message}
                    onChange={handleChange} required rows={4}
                    placeholder="Describí brevemente el proceso o problema que querés resolver..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center py-3 text-sm">
                  Enviar por WhatsApp
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </button>

                <p className="text-xs text-zinc-700 text-center font-mono">
                  Se abrirá WhatsApp con tu mensaje pre-cargado
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
