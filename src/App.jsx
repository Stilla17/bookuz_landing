import React from 'react'
import Navigation from './components/Navigation'
import bgImage from "./assets/image 1.png"
import HeroSection from "./components/HeroSection"
import ComingBooks from "./components/ComingBooks"
import FooterSection from './components/FooterSection'

const App = () => {
  return (
    <div className="mx-auto w-full max-w-[430px] min-h-screen bg-cover bg-center bg-no-repeat shadow-2xl pt-[60px]"   style={{ backgroundImage: `url("${bgImage}")` }}>
      <Navigation />
      <HeroSection />
      <ComingBooks />
      <FooterSection />
    </div>
  )
}

export default App