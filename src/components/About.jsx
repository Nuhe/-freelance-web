import FoxMark from './FoxMark'

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1fr_380px] gap-16 items-start">
        <div>
          <span className="section-label">Quién hay detrás</span>
          <h2 className="section-title">Trabajo directo, alcance claro</h2>
          <div className="space-y-4 text-sm text-zinc-500 leading-relaxed max-w-xl">
            <p>Soy desarrollador y creo landing pages para profesionales, comercios y pequeños negocios que necesitan presentar mejor lo que hacen.</p>
            <p>Mi trabajo se concentra en la implementación técnica: diseño web, publicación, formularios, SEO técnico básico, medición y mantenimiento.</p>
            <p className="text-zinc-400">No soy una agencia de publicidad ni prometo ventas o primeras posiciones en Google. Te digo con claridad qué puedo resolver, qué incluye el servicio y qué queda fuera.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 mt-8">
            {['Contacto directo conmigo', 'Sin tecnología innecesaria', 'Alcance definido por escrito', 'Sin promesas que no puedo cumplir'].map(item => <div key={item} className="border border-zinc-800 rounded-lg p-4 text-xs font-semibold text-zinc-300">{item}</div>)}
          </div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <FoxMark className="w-12 h-14 mb-6" />
          <div className="font-bold text-white text-lg">FOX<span className="text-orange-600">OPS</span></div>
          <div className="text-zinc-600 text-xs font-mono mt-1">Landing pages gestionadas</div>
          <div className="mt-7 pt-6 border-t border-zinc-800 space-y-3 text-sm text-zinc-500">
            <p>React · HTML · CSS</p><p>Vercel · GitHub</p><p>SEO técnico · Analytics</p>
          </div>
        </div>
      </div>
    </section>
  )
}
