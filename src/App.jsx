import React from 'react'
import { CursorProvider } from './context/CursorContext'
import { LanguageProvider } from './context/LanguageContext'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Capabilities from './components/Capabilities'
import Portfolio from './components/Portfolio'
import Expertise from './components/Expertise'
import Stats from './components/Stats'
import Sectors from './components/Sectors'
import Insights from './components/Insights'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
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
          <ContactForm />
        </main>
        <Footer />
      </CursorProvider>
    </LanguageProvider>
  )
}
