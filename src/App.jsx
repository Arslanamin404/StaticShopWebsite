import React from 'react'
import { Navbar } from './components/Navbar'
import { Banner } from './components/Banner'
import { AboutUs } from './components/AboutUs'
import { ProductSection } from './components/ProductSection'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <AboutUs/>
      <ProductSection/>
      <Contact/>
      <Footer/>
      <ToastContainer/>
    </div>
  )
}
