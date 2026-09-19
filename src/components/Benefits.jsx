const groups = [
  ['Implementación inicial', ['Relevamiento del negocio', 'Hasta 5 o 7 secciones', 'Diseño responsive', 'WhatsApp y formulario', 'Dominio y publicación', 'Dos rondas de correcciones']],
  ['Gestión mensual', ['Supervisión técnica', 'Corrección de errores', 'Control de velocidad', 'Resumen de resultados', 'Cambio pequeño de contenido', 'Soporte dentro del alcance']],
]

export default function Benefits() {
  return (
    <section className="py-24 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <span className="section-label">De principio a continuidad</span>
          <h2 className="section-title">Qué recibís</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {groups.map(([title, items]) => (
            <article key={title} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-7 md:p-9">
              <h3 className="text-xl font-bold text-white mb-6">{title}</h3>
              <ul className="space-y-3">
                {items.map(item => <li key={item} className="flex gap-3 text-sm text-zinc-400"><span className="text-orange-500">✓</span>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
