import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import  Home   from './Pages/Home/Home'
import About from './Pages/About/About'
import Services from './Services/Services'
import Contact from './Contact/Contact'
import Team from './Team/Team'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Services/>
    <Team/>
    <Contact/>
      </>
  )
}

export default App
