import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Pre from './components/pre'
import Message from './components/Message'
function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Pre/>
      <Message/>
    </>
  )
}

export default App
