import { useState } from 'react'
import Header from './components/header/header'
import Hero from './components/heroSec/Hero'
import HomeRes from './components/homeRes/HomeRes'
import Feedback from './components/feedback/Feedback'
import Footer from './components/footer/footer'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
  <Hero/>
  <HomeRes/>
  <Feedback/>
  <Footer/>
    </>
  )
}

export default App
