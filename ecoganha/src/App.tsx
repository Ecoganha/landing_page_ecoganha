import { About } from './components/About'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import './index.css'

function App() {

  return (
    <div className='bg-gray-100 m-0 p-0'>
      <Header />
      <Hero />
      <About />
      <Cta />
      <Footer />
    </div>
  )
}

export default App
