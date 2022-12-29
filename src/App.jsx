import { useState } from 'react'
import NavBar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Skills />
    </div>
  )
}

export default App
