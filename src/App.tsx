import { useState } from 'react'
import { StyledApp } from './App.styled'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'
import { SubNavbar } from './components/SubNavbar/SubNavbar'

function App() {

  return (
    <StyledApp.ContainerApp>
      <Navbar />
      <SubNavbar />
      <StyledApp.ContentApp />
      <Footer />
    </StyledApp.ContainerApp>
  )
}

export default App
