const problems = [
  {
    title: 'Tu equipo pierde horas en tareas que debería hacer una computadora',
    desc: 'Copiar datos, completar planillas, enviar reportes manuales. Trabajo repetitivo que se puede automatizar.',
  },
  {
    title: 'Los errores manuales generan más trabajo del que solucionan',
    desc: 'Un número mal cargado, un mail que no se envió, un paso saltado. El error manual es costoso y difícil de rastrear.',
  },
  {
    title: 'Las mismas consultas respondidas una y otra vez',
    desc: 'Preguntas de turnos, precios, horarios, cobertura. Atención repetitiva que consume tiempo de personas que podrían enfocarse en otra cosa.',
  },
  {
    title: 'Tus herramientas no se comunican entre sí',
    desc: 'El mail va por un lado, la planilla por otro, el sistema por un tercero. Nada está conectado y todo termina siendo manual igual.',
  },
  {
    title: 'No tenés visibilidad real de tu operación',
    desc: 'No hay un lugar donde ver qué pasa. Las decisiones se toman con información incompleta, desactualizada o directamente inexistente.',
  },
  {
    title: 'Sin presencia digital o con una web que no representa lo que hacés',
    desc: 'La primera impresión importa. Si tu web no existe o no transmite seriedad, perdés credibilidad antes de abrir la boca.',
  },
  {
    title: 'Tu proceso no escala sin sumar gente',
    desc: 'Cada vez que crece el trabajo, crece el equipo. Los procesos actuales no están diseñados para escalar solos.',
  },
  {
    title: 'Todo depende de que una persona esté disponible',
    desc: 'Si esa persona falta, el proceso se frena. La operación no puede depender de que alguien recuerde qué hay que hacer.',
  },
]

export default function Problems() {
  return (
    <section id="problemas" className="py-24 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="mb-14">
          <span className="section-label">¿Te identificás?</span>
          <h2 className="section-title">Problemas que resuelvo</h2>
          <p className="section-subtitle">
            Son los dolores más comunes en negocios que todavía no automatizaron sus procesos.
            Si uno de estos te suena, hay una solución concreta.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
          {problems.map((p, i) => (
            <div key={p.title} className="flex gap-4 group">
              <span className="text-[11px] font-mono text-orange-600/30 pt-0.5 w-6 shrink-0 select-none group-hover:text-orange-600/50 transition-colors">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-zinc-200 mb-1.5 leading-snug">{p.title}</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-10 border-t border-zinc-900 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <p className="text-zinc-600 text-sm max-w-md">
            Si alguno de estos problemas forma parte de tu operación diaria, podemos resolverlo con automatización, IA o una herramienta a medida.
          </p>
          <a href="#contacto" className="btn-primary shrink-0 text-sm">
            Hablemos de tu caso
          </a>
        </div>
      </div>
    </section>
  )
}
