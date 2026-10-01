import { useState } from 'react'
import './App.css'
import Info from "./Info.jsx"
import About from "./About.jsx"
import Interests from "./Interests.jsx"
import Footer from "./Footer.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <div className='card-container'>
        <div className='card'>
          <Info />
          <About />
          <Interests />
          <Footer />
        </div>
      </div>
    </main>
  )
}

export default App
