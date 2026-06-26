import Hero from './Pages/Hero/Hero.jsx'
import About from './Pages/About/About.jsx'
import Projects from './Pages/Projects/Projects.jsx'
import Competences from './Pages/Competences/Competences.jsx'
import History from './Pages/History/History.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import Footer from './Pages/Footer/Footer.jsx'
import './App.css'

function App() {

  return (
    <>
      <Hero />
      <main>
        <About />
        <Projects />
        <Competences />
        <History />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
