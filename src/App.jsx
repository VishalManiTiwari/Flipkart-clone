import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PreNav from './Components/PreNav'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Hero from './Components/Hero'
import Electronics from './Components/Electronics'
import Section from './Components/Section'
import Footer from './Components/Footer'
import Mobile from './Components/Click/Mobile'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <PreNav/>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
     <Route path='/mobile' element={<Mobile/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
