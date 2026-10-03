import { useState } from 'react'
import FoxMark from './components/FoxMark'
import FoxNetwork from './components/FoxNetwork'

const email = 'contacto@foxops.digital'
const contactWebhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL?.trim()

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
      <a href="#soluciones" onClick={closeMenu}>Soluciones</a><a href="#enfoque" onClick={closeMenu}>Enfoque</a><a href="#contacto" onClick={closeMenu}>Contacto</a>
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
  return <section id="soluciones" className="solutions section-pad"><div className="container">
    <div className="section-head"><div><div className="section-kicker"><span>01 / LO QUE HACEMOS</span></div><h2>La solución justa<br /><em>para cada desafío.</em></h2></div><p>No todos los negocios necesitan lo mismo. Elegimos la herramienta adecuada y la hacemos trabajar con un propósito claro.</p></div>
    <div className="solution-grid">{solutions.map((solution) => <article className="solution-card" key={solution.number}>
      <div className="solution-card-top"><span>{solution.number} / 03</span><SolutionIcon type={solution.icon} /></div>
      <div><h3>{solution.title}</h3><p>{solution.description}</p></div>
      <div className="solution-card-bottom"><span>{solution.detail}</span><ArrowIcon diagonal /></div>
    </article>)}</div>
  </div></section>
}

function Approach() {
  return <section id="enfoque" className="approach section-pad"><div className="container approach-layout">
    <div className="approach-intro"><div className="section-kicker"><span>02 / NUESTRO ENFOQUE</span></div><h2>Un proceso claro.<br /><em>Una solución útil.</em></h2><p>Definimos qué necesita tu negocio antes de elegir tecnología. Así cada decisión tiene un objetivo y cada entrega, un resultado concreto.</p></div>
    <div className="steps">{steps.map((step) => <div className="step" key={step.number}><span className="step-number">{step.number}</span><div><h3>{step.title}</h3><p>{step.description}</p></div><span className="step-plus" aria-hidden="true">+</span></div>)}</div>
  </div></section>
}

function Contact() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const fields = new FormData(form)
    if (fields.get('website')) return

    const payload = new URLSearchParams()
    for (const key of ['nombre', 'correo', 'telefono', 'servicio', 'mensaje', 'website']) {
      payload.set(key, String(fields.get(key) || '').trim())
    }

    if (!contactWebhookUrl) {
      const subject = `Consulta FoxOps: ${payload.get('servicio')}`
      const body = `Nombre: ${payload.get('nombre')}\nCorreo: ${payload.get('correo')}\nTeléfono: ${payload.get('telefono') || 'No indicado'}\nServicio: ${payload.get('servicio')}\n\nProyecto:\n${payload.get('mensaje')}`
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      setStatus('email')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(contactWebhookUrl, { method: 'POST', body: payload })
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
    <div className="contact-layout">
      <div className="contact-content"><div className="section-kicker light"><span>03 / EL PRÓXIMO MOVIMIENTO</span></div><h2>Tu próximo paso<br />empieza acá<span>.</span></h2><p>Contanos qué querés construir o qué proceso necesitás mejorar. Pensemos juntos la forma más inteligente de hacerlo.</p></div>
      <form className="contact-form" onSubmit={handleSubmit}>
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
  return <><Header /><main><Hero /><Solutions /><Approach /><Contact /></main><Footer /></>
}
