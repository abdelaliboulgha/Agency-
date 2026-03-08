import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Capabilities from './components/Capabilities'
import Portfolio from './components/Portfolio'
import Expertise from './components/Expertise'
import Stats from './components/Stats'
import Sectors from './components/Sectors'
import Insights from './components/Insights'
import Footer from './components/Footer'
import { CursorProvider } from './context/CursorContext'

function App() {
  return (
    <CursorProvider>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <Portfolio />
        <Expertise />
        <Stats />
        <Sectors />
        <Insights />
      </main>
      <Footer />
    </CursorProvider>
  )
}

export default App
