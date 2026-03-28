import { useState } from 'react'

const WHATSAPP_NUMBER = '541134287724'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Hola FoxOps! Mi nombre es ${form.name}.\n\nServicio de interés: ${form.service || 'No especificado'}\nMail: ${form.email}\n\nConsulta:\n${form.message}`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors text-sm'

  const contactItems = [
    {
      icon: '💬',
      title: 'WhatsApp',
      desc: '+54 11 3428-7724',
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
    },
    {
      icon: '📧',
      title: 'Email',
      desc: 'contacto@foxops.dev',
      href: 'mailto:contacto@foxops.dev',
    },
    {
      icon: '🐙',
      title: 'GitHub',
      desc: 'github.com/Nuhe',
      href: 'https://github.com/Nuhe',
    },
  ]

  return (
    <section id="contacto" className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left: info */}
          <div>
            <h2 className="section-title">Hablemos de tu proyecto</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Contame brevemente qué problema tenés o qué querés mejorar. Te respondo en menos de
              48 horas con una idea concreta de cómo podemos resolverlo.
            </p>

            <div className="space-y-5">
              {contactItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-400 hover:text-white group transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 group-hover:border-blue-500/50 flex items-center justify-center text-lg transition-colors shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  ¡Redirigiendo a WhatsApp!
                </h3>
                <p className="text-gray-400 mb-6">
                  Si no se abrió automáticamente, hacé clic en el botón.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary text-sm"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Nombre <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Email <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-300 mb-1.5"
                  >
                    ¿Qué servicio te interesa?
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={`${inputClass} text-gray-300`}
                  >
                    <option value="">Seleccioná una opción</option>
                    <option value="Automatización de tareas">Automatización de tareas</option>
                    <option value="Bot o asistente IA">Bot o asistente IA</option>
                    <option value="Desarrollo web">Desarrollo web</option>
                    <option value="Integración de sistemas">Integración de sistemas</option>
                    <option value="No sé, necesito orientación">
                      No sé, necesito orientación
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1.5"
                  >
                    Contame tu problema o lo que necesitás{' '}
                    <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Describí brevemente tu situación actual o el proceso que querés mejorar..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center py-3">
                  Enviar por WhatsApp
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </button>

                <p className="text-xs text-gray-600 text-center">
                  Al enviar, se abrirá WhatsApp con tu mensaje pre-cargado.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
