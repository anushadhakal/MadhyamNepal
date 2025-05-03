import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import  Home   from './Pages/Home/Home'
import About from './Pages/About/About'
import Services from './Services/Services'
import Contact from './Contact/Contact'
import Team from './Team/Team'
import Footer from './Components/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';
import OurClient from './OurClient/OurClient'
import Testimonials from './Testimonials/Testimonials'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <OurClient/>
    <Services/>
    <Team/>
    <Testimonials/>
    <Contact/>
    <Footer/>
      </>
  )
}

export default App
