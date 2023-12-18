import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './screens/login'
import Message from './components/Message'

import Img from './components/img'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    // <>
    //   <Navbar/>
    //    <Home/>
    //   <Img/>

    //   <Message/> 
    // </>
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}>
       
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
