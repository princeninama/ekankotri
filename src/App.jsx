import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Home from './components/Home'

import Message from './components/Message'

import Img from './components/img'
function App() {

  return (
    <>
      <Navbar/>
       <Home/>
      <Img/>

      {/* <Message/>  */}
    </>
  )
}

export default App
