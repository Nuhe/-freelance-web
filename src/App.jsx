import { useRef, useState } from 'react'
import { motion as Motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import FoxMark from './components/FoxMark'
import FoxNetwork from './components/FoxNetwork'

const email = 'contacto@foxops.digital'

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
      <a className="nav-cta" href={`mailto:${email}?subject=Hablemos%20de%20mi%20proyecto`} onClick={closeMenu}>Hablemos <ArrowIcon diagonal /></a>
    </nav>
  </div></header>
}

function Hero() {
  const heroRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end end'] })
  const foxScale = useTransform(scrollYProgress, [0, 0.35, 1], [1, 1.16, 1.85])
  const foxBlur = useTransform(scrollYProgress, [0, 0.35, 1], ['blur(0px)', 'blur(0px)', 'blur(14px)'])
  const foxOpacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 0.9, 0])
  const copyOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [1, 1, 0])
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -65])
  const backdropOpacity = useTransform(scrollYProgress, [0, 0.35, 1], [0, 0, 0.78])

  return <section id="inicio" ref={heroRef} className="hero-scroll"><div className="hero">
    <div className="hero-glow" aria-hidden="true" />
    <Motion.div className="hero-veil" style={reduceMotion ? undefined : { opacity: backdropOpacity }} aria-hidden="true" />
    <div className="container hero-layout">
      <Motion.div className="hero-copy" style={reduceMotion ? undefined : { opacity: copyOpacity, y: copyY }}>
        <div className="eyebrow"><span className="eyebrow-line" /> DISEÑO · DESARROLLO · OPERACIÓN</div>
        <h1>Soluciones<br /><span>digitales</span><br />para avanzar<span className="orange-dot">.</span></h1>
        <p>Creamos landing pages, tiendas online y automatizaciones que ayudan a vender, conectar y trabajar mejor.</p>
        <div className="hero-actions"><a className="button button-primary" href={`mailto:${email}?subject=Hablemos%20de%20mi%20proyecto`}>Hablemos de tu proyecto <ArrowIcon diagonal /></a><a className="text-link" href="#soluciones">Explorar soluciones <ArrowIcon /></a></div>
        <div className="hero-caption"><span className="caption-cross">✳</span> Estrategia para pensar mejor. Tecnología para hacer que pase.</div>
      </Motion.div>
      <Motion.div className="hero-art" style={reduceMotion ? undefined : { scale: foxScale, filter: foxBlur, opacity: foxOpacity }}><div className="art-orbit art-orbit-one" aria-hidden="true" /><div className="art-orbit art-orbit-two" aria-hidden="true" /><div className="art-label art-label-top">FOX / 01 <span>DISEÑO DIGITAL</span></div><FoxNetwork /><div className="art-label art-label-bottom"><span>ESTRATEGIA</span><span className="art-label-line" /><span>EJECUCIÓN</span></div></Motion.div>
    </div>
    <Motion.div className="container hero-bottom" style={reduceMotion ? undefined : { opacity: copyOpacity }}><span>FOXOPS / OPERACIONES DIGITALES</span><span>DESLIZÁ PARA EXPLORAR <span aria-hidden="true">↓</span></span></Motion.div>
  </div></section>
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
  return <section id="contacto" className="contact section-pad"><div className="container contact-box">
    <div className="contact-content"><div className="section-kicker light"><span>03 / EL PRÓXIMO MOVIMIENTO</span></div><h2>Tu próximo paso<br />empieza acá<span>.</span></h2><p>Contanos qué querés construir o qué proceso necesitás mejorar. Pensemos juntos la forma más inteligente de hacerlo.</p><a className="button button-dark" href={`mailto:${email}?subject=Quiero%20hablar%20de%20mi%20proyecto`}>Contanos tu idea <ArrowIcon diagonal /></a></div>
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
