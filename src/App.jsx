import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ProjectManagement from './components/ProjectManagement'
import Customize from './components/Customize'
import Pricing from './components/Pricing'
import YourWork from './components/YourWork'

function App() {

  return (
    <>
      <Nav />
      <Hero />
      <ProjectManagement />
      <Customize />
      <Pricing />
      <YourWork />
    </>
  )
}

export default App
