

import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import LoadingScreen from './components/loadingScreen'
import Projects from './pages/Projects'
import Services from './pages/Services'
import BackToTop from './components/BackToTop'
import useReveal from './hooks/animation/useReveal'
import useHoverCard from './hooks/animation/useHoverCard'
import Skills from './pages/Skills'
import Testimonial from './pages/Testimonials'

function App() {
  useReveal();
  useHoverCard();
  return (
    <>
      {/* <LoadingScreen/> */}
        <Header/>
        <Home/>
        <About/>
        <Projects/>
        <Skills/>
        <Services/>
        <Testimonial/>
        <Contact/>
        <Footer/>
        <BackToTop/>
    </>
  )
}

export default App
