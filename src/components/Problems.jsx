const problems = [
  { title: 'Dependés solamente de Instagram o WhatsApp', desc: 'Tus clientes encuentran publicaciones sueltas, pero no un lugar claro donde entender qué ofrecés y por qué elegirte.' },
  { title: 'Tu página actual quedó desactualizada', desc: 'La información, el diseño o los datos de contacto ya no representan la calidad actual de tu negocio.' },
  { title: 'Las personas preguntan siempre lo mismo', desc: 'Servicios, horarios, ubicación y formas de trabajo podrían estar explicados antes de iniciar una conversación.' },
  { title: 'No sabés si la página genera consultas', desc: 'Sin medición, es imposible distinguir entre tener visitas y recibir contactos que realmente importan.' },
  { title: 'Tu web se ve mal desde el celular', desc: 'La mayoría de las consultas comienza en una pantalla pequeña. Una experiencia incómoda hace que la persona se vaya.' },
  { title: 'No querés ocuparte de cuestiones técnicas', desc: 'Dominio, publicación, certificados y mantenimiento no deberían convertirse en otra tarea para vos.' },
  { title: 'No aparecés correctamente en Google', desc: 'Una base técnica incompleta puede dificultar que los buscadores comprendan e indexen tu página.' },
  { title: 'No necesitás una web enorme', desc: 'Una landing enfocada puede explicar tu propuesta y llevar a la acción sin sumar páginas que nadie va a mantener.' },
]

export default function Problems() {
  return (
    <section id="problemas" className="py-24 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="mb-14">
          <span className="section-label">¿Te identificás?</span>
          <h2 className="section-title">Una web debería simplificarte el trabajo</h2>
          <p className="section-subtitle">
            Una landing bien construida resuelve problemas concretos de presentación,
            confianza, contacto y seguimiento.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
          {problems.map((p, i) => (
            <div key={p.title} className="flex gap-5 group">
              <span className="text-[11px] font-mono text-zinc-800 group-hover:text-orange-600/30 transition-colors pt-1 shrink-0 tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-zinc-300 mb-1.5 leading-snug group-hover:text-white transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-zinc-900">
          <p className="text-sm text-zinc-500">
            Si alguno de estos puntos te describe,{' '}
            <a href="#contacto" className="text-orange-600/70 hover:text-orange-500 underline underline-offset-2 transition-colors">
              contame qué necesita tu negocio
            </a>{' '}
            y vemos qué se puede hacer.
          </p>
        </div>
      </div>
    </section>
  )
}
