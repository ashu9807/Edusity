import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navabar from './components/Navbaar/Navabar'
import Hero from './components/Hero/Hero'
import Programs from './components/Program/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

function App() {
  const [playState, setPlaystate] = useState(false)

  return (
    <>
    <Navabar/>
    <Hero/>
    <Title subtitle='OUR PROGRAM' title='What We offer' />
    <Programs/>
    <About setPlaystate={setPlaystate}/>
    <Title subtitle='Gallery' title='Campus Photos'/>
    <Gallery />
    <Title subtitle='Testimonials' title='What Student Says'/>
    <Testimonials/>
    <Title subtitle='Contact-Us' title=''/>
    <Contact/>
    <VideoPlayer playState={playState} setPlaystate={setPlaystate} />
    </>
  )
}

export default App
