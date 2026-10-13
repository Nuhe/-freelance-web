import { useState } from 'react'
import FoxMark from './components/FoxMark'
import FoxNetwork from './components/FoxNetwork'
import useInView from './hooks/useInView'

const email = 'contacto@foxops.digital'
const contactWebhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL?.trim() || '/webhook/foxops-contacto'

const solutions = [
  { number: '01', title: 'Landing pages', description: 'Una primera impresión que explica tu propuesta y convierte interés en conversaciones.', detail: 'Diseño · Desarrollo · Lanzamiento', icon: 'landing' },
  { number: '02', title: 'E-commerce', description: 'Una tienda clara y ágil para mostrar lo que vendés y hacer simple cada compra.', detail: 'Catálogo · Pagos · Experiencia', icon: 'commerce' },
  { number: '03', title: 'Automatizaciones', description: 'Procesos conectados que reducen tareas manuales y le dan tiempo a tu negocio.', detail: 'Flujos · Integraciones · Operación', icon: 'automation' },
]

const steps = [
  { number: '01', title: 'Observamos', description: 'Entendemos el negocio, el desafío y qué resultado vale la pena perseguir.' },
  { number: '02', title: 'Trazamos', description: 'Definimos una solución concreta, con un alcance claro y sin complejidad de más.' },
  { number: '03', title: 'Ejecutamos', description: 'Diseñamos, desarrollamos y ponemos la solución a trabajar.' },
]

const cases = [
  {
    slug: 'plan-paracaidas',
    title: 'Plan Paracaídas',
    description: 'Landing personal para una asesora financiera, con reserva de reuniones y contacto directo por WhatsApp.',
    tags: ['Landing page', 'Servicios profesionales'],
    url: 'https://www.majo-planparacaidas.com/',
    image: '/cases/plan-paracaidas.webp',
    alt: 'Portada de Plan Paracaídas: el titular “¿Qué pasaría si mañana algo cambia?” junto a la foto de la asesora María José Berdaguer.',
    detail: {
      challenge: 'Una asesora en planificación financiera necesitaba un sitio de marca personal que convirtiera visitas en reuniones.',
      solution: 'Una landing estática con secciones de áreas, método, conóceme y contacto.',
      result: 'Reserva de reuniones desde el modal “Solicitar una reunión” y botones de contacto directo por WhatsApp.',
      stack: ['HTML', 'CSS', 'JavaScript'],
    },
  },
  {
    slug: 'rossi-almacen',
    title: 'Rossi Almacén',
    description: 'Tienda online para un almacén de barrio, con catálogo de picadas y carrito de pedidos.',
    tags: ['E-commerce', 'Demo'],
    url: 'https://almacen-rossi.vercel.app/',
    image: '/cases/rossi-almacen.webp',
    alt: 'Portada de Rossi Almacén: el titular “Las cosas ricas se comparten” junto a una tabla de picada con quesos, fiambres y aceitunas.',
    detail: {
      challenge: 'Un almacén de barrio quería empezar a tomar pedidos online.',
      solution: 'Una tienda demo con catálogo de picadas, chipá y sándwiches de miga, y secciones de productos, servicios y nosotros.',
      result: 'Un catálogo navegable con carrito de pedidos que muestra cómo funciona la compra online.',
      stack: ['Next.js', 'Vercel'],
    },
  },
  {
    slug: 'infolaplata',
    title: 'INFOLAPLATA',
    description: 'Propuesta de rediseño para un medio local, con portada editorial, buscador y newsletter.',
    tags: ['Sitio de noticias', 'Concepto'],
    url: 'https://nuhe.github.io/laplata-noticias/',
    image: '/cases/infolaplata.webp',
    alt: 'Portada de la propuesta de rediseño de INFOLAPLATA, con noticias destacadas de La Plata y una agenda lateral.',
    badge: 'Propuesta de rediseño',
    note: 'Concepto de diseño. No es el sitio oficial del medio.',
    detail: {
      challenge: 'Imaginar un rediseño para un medio de noticias local.',
      solution: 'Una portada editorial con “Noticias cercanas”, agenda, buscador y newsletter, con animaciones de entrada.',
      result: 'Un concepto navegable y publicado que muestra la propuesta completa. No es el sitio oficial del medio.',
      stack: ['HTML', 'CSS', 'JavaScript (ES modules)', 'GitHub Pages'],
    },
  },
]

function ArrowIcon({ diagonal = false }) {
  return diagonal
    ? <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4.5 15.5 15 5M6.5 5H15v8.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
    : <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function SolutionIcon({ type }) {
  if (type === 'landing') return <svg viewBox="0 0 80 80" fill="none" aria-hidden="true"><rect x="10" y="15" width="60" height="49" rx="5" stroke="currentColor" strokeWidth="1.5" /><path d="M10 27h60M18 21h2m5 0h2m5 0h2M21 39h22M21 46h38M21 53h29" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><rect x="49" y="36" width="10" height="10" rx="2" fill="currentColor" fillOpacity=".28" /></svg>
  if (type === 'commerce') return <svg viewBox="0 0 80 80" fill="none" aria-hidden="true"><path d="M20 31h40l-3 31H23l-3-31Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M30 33v-8a10 10 0 0 1 20 0v8M31 47h18M40 40v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><circle cx="40" cy="47" r="17" stroke="currentColor" strokeOpacity=".2" /></svg>
  return <svg viewBox="0 0 80 80" fill="none" aria-hidden="true"><circle cx="17" cy="40" r="6" stroke="currentColor" strokeWidth="1.5" /><circle cx="62" cy="22" r="6" stroke="currentColor" strokeWidth="1.5" /><circle cx="62" cy="58" r="6" stroke="currentColor" strokeWidth="1.5" /><path d="M23 40h12m7-9 14-7M42 49l14 7M35 40l7-9m-7 9 7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><circle cx="40" cy="40" r="9" fill="currentColor" fillOpacity=".2" stroke="currentColor" strokeWidth="1.5" /></svg>
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  return <header className="site-header"><div className="container header-inner">
    <a className="brand" href="#inicio" aria-label="FoxOps, ir al inicio" onClick={closeMenu}><FoxMark /><span>FOX<span>OPS</span></span></a>
    <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
    <nav id="site-nav" className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegación principal">
      <a href="#soluciones" onClick={closeMenu}>Soluciones</a><a href="#enfoque" onClick={closeMenu}>Enfoque</a><a href="#casos" onClick={closeMenu}>Casos</a><a href="#contacto" onClick={closeMenu}>Contacto</a>
      <a className="nav-cta" href="#contacto" onClick={closeMenu}>Hablemos <ArrowIcon diagonal /></a>
    </nav>
  </div></header>
}

function Hero() {
  return <section id="inicio" className="hero">
    <div className="hero-glow" aria-hidden="true" />
    <div className="container hero-layout">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-line" /> DISEÑO · DESARROLLO · OPERACIÓN</div>
        <h1>Soluciones<br /><span>digitales</span><br />para avanzar<span className="orange-dot">.</span></h1>
        <p>Creamos landing pages, tiendas online y automatizaciones que ayudan a vender, conectar y trabajar mejor.</p>
        <div className="hero-actions"><a className="button button-primary" href="#contacto">Hablemos de tu proyecto <ArrowIcon diagonal /></a><a className="text-link" href="#soluciones">Explorar soluciones <ArrowIcon /></a></div>
        <div className="hero-caption"><span className="caption-cross">✳</span> Estrategia para pensar mejor. Tecnología para hacer que pase.</div>
      </div>
      <div className="hero-art"><div className="art-orbit art-orbit-one" aria-hidden="true" /><div className="art-orbit art-orbit-two" aria-hidden="true" /><div className="art-label art-label-top">FOX / 01 <span>DISEÑO DIGITAL</span></div><FoxNetwork /><div className="art-label art-label-bottom"><span>ESTRATEGIA</span><span className="art-label-line" /><span>EJECUCIÓN</span></div></div>
    </div>
    <div className="container hero-bottom"><span>FOXOPS / OPERACIONES DIGITALES</span><span>DESLIZÁ PARA EXPLORAR <span aria-hidden="true">↓</span></span></div>
  </section>
}

function Solutions() {
  const headRef = useInView()
  const gridRef = useInView({ threshold: 0.08 })
  return <section id="soluciones" className="solutions section-pad"><div className="container">
    <div className="section-head" ref={headRef}>
      <div><div className="section-kicker reveal-item"><span>01 / LO QUE HACEMOS</span></div><h2><span className="reveal-mask"><span>La solución justa</span></span><span className="reveal-mask" style={{ '--i': 1 }}><span><em>para cada desafío.</em></span></span></h2></div>
      <p className="reveal-item" style={{ '--i': 2 }}>No todos los negocios necesitan lo mismo. Elegimos la herramienta adecuada y la hacemos trabajar con un propósito claro.</p>
    </div>
    <ul className="solution-grid" ref={gridRef}>{solutions.map((solution, index) => <li className="reveal-item" style={{ '--i': index }} key={solution.number}>
      <article className="solution-card">
        <div className="solution-card-top"><span>{solution.number} / 03</span><SolutionIcon type={solution.icon} /></div>
        <div><h3>{solution.title}</h3><p>{solution.description}</p></div>
        <div className="solution-card-bottom"><span>{solution.detail}</span><ArrowIcon diagonal /></div>
      </article>
    </li>)}</ul>
  </div></section>
}

function Approach() {
  const introRef = useInView()
  const stepsRef = useInView({ threshold: 0.1 })
  return <section id="enfoque" className="approach section-pad"><div className="container approach-layout">
    <div className="approach-intro" ref={introRef}><div className="section-kicker reveal-item"><span>02 / NUESTRO ENFOQUE</span></div><h2><span className="reveal-mask"><span>Un proceso claro.</span></span><span className="reveal-mask" style={{ '--i': 1 }}><span><em>Una solución útil.</em></span></span></h2><p className="reveal-item" style={{ '--i': 2 }}>Definimos qué necesita tu negocio antes de elegir tecnología. Así cada decisión tiene un objetivo y cada entrega, un resultado concreto.</p></div>
    <div className="steps" ref={stepsRef}>{steps.map((step, index) => <div className="step reveal-item" style={{ '--i': index }} key={step.number}><span className="step-number">{step.number}</span><div><h3>{step.title}</h3><p>{step.description}</p></div><span className="step-plus" aria-hidden="true">+</span></div>)}</div>
  </div></section>
}

function CaseDetail({ detail }) {
  return <details className="case-detail">
    <summary>Ver detalle <span className="case-detail-icon" aria-hidden="true" /></summary>
    <dl className="case-detail-body">
      <div><dt>Desafío</dt><dd>{detail.challenge}</dd></div>
      <div><dt>Solución</dt><dd>{detail.solution}</dd></div>
      <div><dt>Resultado</dt><dd>{detail.result}</dd></div>
      <div><dt>Stack</dt><dd><ul className="case-stack">{detail.stack.map((tool) => <li key={tool}>{tool}</li>)}</ul></dd></div>
    </dl>
  </details>
}

function Cases() {
  const headRef = useInView()
  const gridRef = useInView({ threshold: 0.08 })
  return <section id="casos" className="cases section-pad"><div className="container">
    <div className="section-head" ref={headRef}>
      <div><div className="section-kicker reveal-item"><span>03 / CASOS</span></div><h2><span className="reveal-mask"><span>Proyectos que ya</span></span><span className="reveal-mask" style={{ '--i': 1 }}><span><em>están trabajando.</em></span></span></h2></div>
      <p className="reveal-item" style={{ '--i': 2 }}>Algunos sitios que diseñamos y desarrollamos: una landing para un servicio profesional, una tienda online y un concepto editorial.</p>
    </div>
    <ul className="case-grid" ref={gridRef}>{cases.map((item, index) => <li className="reveal-item" style={{ '--i': index }} key={item.slug}>
      <article className="case-card">
        <div className="case-media">
          <img src={item.image} alt={item.alt} width="1200" height="750" loading="lazy" decoding="async" />
          {item.badge && <span className="case-badge">{item.badge}</span>}
        </div>
        <div className="case-body">
          <div className="case-card-top"><span>{String(index + 1).padStart(2, '0')} / {String(cases.length).padStart(2, '0')}</span><ul className="case-tags" aria-label="Categorías">{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {item.note && <p className="case-note">{item.note}</p>}
          <CaseDetail detail={item.detail} />
          <a className="case-link" href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`Ver sitio de ${item.title} (se abre en una pestaña nueva)`}>Ver sitio <ArrowIcon diagonal /></a>
        </div>
      </article>
    </li>)}</ul>
  </div></section>
}

function Contact() {
  const [status, setStatus] = useState('idle')
  const layoutRef = useInView({ threshold: 0.1 })

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const fields = new FormData(form)
    if (fields.get('website')) return

    const payload = new URLSearchParams()
    for (const key of ['nombre', 'correo', 'telefono', 'servicio', 'mensaje', 'website']) {
      payload.set(key, String(fields.get(key) || '').trim())
    }

    function openEmailDraft() {
      const subject = `Consulta FoxOps: ${payload.get('servicio')}`
      const body = `Nombre: ${payload.get('nombre')}\nCorreo: ${payload.get('correo')}\nTeléfono: ${payload.get('telefono') || 'No indicado'}\nServicio: ${payload.get('servicio')}\n\nProyecto:\n${payload.get('mensaje')}`
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      setStatus('email')
    }

    setStatus('sending')
    try {
      const response = await fetch(contactWebhookUrl, { method: 'POST', body: payload })
      if (response.status === 404) {
        openEmailDraft()
        return
      }
      if (!response.ok) throw new Error('No se pudo enviar la solicitud')
      const result = await response.json()
      if (result.ok !== true) throw new Error('La solicitud no fue confirmada')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return <section id="contacto" className="contact section-pad"><div className="container contact-box">
    <div className="contact-layout" ref={layoutRef}>
      <div className="contact-content"><div className="section-kicker light reveal-item"><span>04 / EL PRÓXIMO MOVIMIENTO</span></div><h2 className="reveal-item" style={{ '--i': 1 }}>Tu próximo paso<br />empieza acá<span>.</span></h2><p className="reveal-item" style={{ '--i': 2 }}>Contanos qué querés construir o qué proceso necesitás mejorar. Pensemos juntos la forma más inteligente de hacerlo.</p></div>
      <form className="contact-form reveal-item" style={{ '--i': 3 }} onSubmit={handleSubmit}>
        <div className="contact-form-heading"><span>CONTANOS TU IDEA</span><span>01 / 01</span></div>
        <div className="contact-fields">
          <label><span className="field-label">Tu nombre <b>*</b></span><input name="nombre" type="text" autoComplete="name" maxLength="100" placeholder="¿Cómo te llamás?" required /></label>
          <label><span className="field-label">Tu correo <b>*</b></span><input name="correo" type="email" autoComplete="email" maxLength="254" placeholder="nombre@empresa.com" required /></label>
          <label><span className="field-label">Teléfono <small>Opcional</small></span><input name="telefono" type="tel" autoComplete="tel" maxLength="40" placeholder="Tu número de contacto" /></label>
          <label><span className="field-label">¿Qué necesitás? <b>*</b></span><select name="servicio" defaultValue="" required><option value="" disabled>Seleccioná una opción</option><option value="Landing page">Landing page</option><option value="E-commerce">E-commerce</option><option value="Automatización">Automatización</option><option value="Otros">Otros</option></select></label>
          <label className="contact-message"><span className="field-label">Contanos sobre tu proyecto <b>*</b></span><textarea name="mensaje" rows="4" minLength="10" maxLength="3000" placeholder="¿Qué te gustaría crear o mejorar?" required /></label>
        </div>
        <div className="contact-honeypot" aria-hidden="true"><label>Dejá este campo vacío<input name="website" type="text" tabIndex="-1" autoComplete="off" /></label></div>
        <button className="button button-dark contact-submit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Enviando…' : 'Enviar consulta'} <ArrowIcon diagonal /></button>
        <p className="contact-feedback" role="status" aria-live="polite">{status === 'success' && '¡Gracias! Recibimos tu consulta y te responderemos pronto.'}{status === 'error' && <>No pudimos enviar tu consulta. Probá otra vez o escribinos a <a href={`mailto:${email}`}>{email}</a>.</>}{status === 'email' && 'Se abrió tu aplicación de correo con la consulta preparada. Enviá el mensaje desde allí.'}</p>
      </form>
    </div>
    <div className="contact-mark" aria-hidden="true"><FoxMark /></div>
    <div className="contact-footer"><span>UNA BUENA IDEA MERECE UNA GRAN EJECUCIÓN.</span><a href={`mailto:${email}`}>{email}</a></div>
  </div></section>
}

function Footer() {
  return <footer className="footer"><div className="container footer-inner"><a className="brand" href="#inicio" aria-label="FoxOps, ir al inicio"><FoxMark /><span>FOX<span>OPS</span></span></a><p>Landing pages · E-commerce · Automatizaciones</p><span>© {new Date().getFullYear()} FoxOps</span></div></footer>
}

export default function App() {
  return <><Header /><main><Hero /><Solutions /><Approach /><Cases /><Contact /></main><Footer /></>
}
