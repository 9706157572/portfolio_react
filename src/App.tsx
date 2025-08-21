
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Experience from './components/experience'
import SkillsSection from './components/skills'
import EducationSection from './components/education'
import ContactSection from './components/contact'
import GraphicsFooter from './components/footer'
const App = () => {
  return (
    <div>
      
      <Navbar/>
      <Hero/>
      <About/>
     <Experience/>
     <SkillsSection/>
     <EducationSection/>
     <ContactSection/>
     <GraphicsFooter/>
    </div>
  )
}

export default App
