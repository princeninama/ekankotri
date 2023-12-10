import React from 'react'

const Navbar = () => {
  return (
    <nav className=" w-full mt-0 z-100">
    <div className='bg-gradient-to-r from-red-100  to-pink-300 w-full font-serif text-2xl  text-center p-4 h-16'>
       <div className='inline  p-10'>
        Events
        </div> 
        <div className='inline p-10'>
        Pre Wedding
        </div>
        <div className='inline p-10'>
        Reception
        </div>
        <div className='inline p-10'>
        Message
        </div>
    </div>
    </nav>
  )
}

export default Navbar
