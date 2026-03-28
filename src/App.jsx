import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Problems from './components/Problems'
import Benefits from './components/Benefits'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import About from './components/About'
import CTASection from './components/CTASection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Problems />
        <Benefits />
        <Process />
        <Portfolio />
        <About />
        <CTASection />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
