const services = [
  ['Diseño y desarrollo', 'Una landing clara, adaptable a celulares y alineada con la identidad de tu negocio.'],
  ['Publicación técnica', 'Configuración del dominio, HTTPS y despliegue para que no tengas que ocuparte de la infraestructura.'],
  ['Contacto directo', 'WhatsApp y formulario ubicados estratégicamente para facilitar las consultas.'],
  ['SEO técnico básico', 'Títulos, descripciones, estructura, sitemap e indexación preparados para Google.'],
  ['Analytics', 'Medición de visitas y acciones importantes, como clics en WhatsApp o envíos del formulario.'],
  ['Acompañamiento', 'Mantenimiento técnico, cambios pequeños y un resumen mensual fácil de entender.'],
]

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <span className="section-label">El servicio</span>
          <h2 className="section-title">Una landing lista y acompañada</h2>
          <p className="section-subtitle">No recibís solamente archivos: recibís una presencia digital publicada, medible y mantenida.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(([title, description], index) => (
            <article key={title} className="card">
              <span className="text-xs font-mono text-orange-600/60">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="text-base font-semibold text-white mt-5 mb-2">{title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
