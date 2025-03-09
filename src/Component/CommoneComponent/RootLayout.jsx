import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Homecomponent/Navbar'
import Footer from '../HomeComponent/Footer'

const RootLayout = () => {
  return (
    <div>
         <Navbar />
         <Outlet />
         <Footer />
    </div>
  )
}

export default RootLayout