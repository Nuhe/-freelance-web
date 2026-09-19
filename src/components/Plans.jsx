const plans = [
  {
    name: 'Presencia', setup: 'ARS 150.000', monthly: 'ARS 50.000 / mes',
    description: 'Para empezar con una presencia profesional y mantenimiento esencial.',
    items: ['Hasta 5 secciones', 'Diseño sobre base personalizable', 'WhatsApp y formulario', 'SEO técnico y Analytics básicos', 'Mantenimiento técnico', 'Un cambio pequeño cada dos meses'],
  },
  {
    name: 'Gestionado', setup: 'ARS 200.000', monthly: 'ARS 75.000 / mes', featured: true,
    description: 'Para negocios que quieren medir contactos y mantener la página activa.',
    items: ['Hasta 7 secciones', 'Mayor personalización visual', 'Search Console e indexación', 'Eventos de WhatsApp y formulario', 'Informe mensual sencillo', 'Un cambio pequeño por mes'],
  },
]

export default function Plans() {
  return (
    <section id="planes" className="py-24 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-14 text-center">
          <span className="section-label">Planes claros</span>
          <h2 className="section-title">Elegí el acompañamiento que necesitás</h2>
          <p className="text-sm text-zinc-500 max-w-2xl mx-auto">Ambos planes tienen una permanencia inicial de 6 meses. Dominio y servicios de terceros se informan por separado.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {plans.map(plan => (
            <article key={plan.name} className={`relative rounded-2xl border p-7 md:p-9 ${plan.featured ? 'border-orange-600/60 bg-orange-600/[0.04]' : 'border-zinc-800 bg-zinc-900/50'}`}>
              {plan.featured && <span className="absolute -top-3 right-6 rounded-full bg-orange-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">Recomendado</span>}
              <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
              <p className="text-sm text-zinc-500 mt-2 min-h-12">{plan.description}</p>
              <div className="mt-7 border-y border-zinc-800 py-5">
                <div className="text-xs text-zinc-600 uppercase tracking-wider">Activación</div>
                <div className="text-2xl font-bold text-white mt-1">{plan.setup}</div>
                <div className="text-sm font-semibold text-orange-500 mt-2">{plan.monthly}</div>
              </div>
              <ul className="space-y-3 my-7">
                {plan.items.map(item => <li key={item} className="flex gap-3 text-sm text-zinc-400"><span className="text-orange-500">✓</span>{item}</li>)}
              </ul>
              <a href="#contacto" className={plan.featured ? 'btn-primary w-full justify-center' : 'btn-secondary w-full justify-center'}>Consultar este plan</a>
            </article>
          ))}
        </div>
        <p className="text-xs text-zinc-600 text-center mt-6">Valores de referencia sujetos a actualización. También disponible modalidad de pago único.</p>
      </div>
    </section>
  )
}
