import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Team from './components/Team'
import Clients from './components/Clients'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Team />
        <Clients />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

export default App
