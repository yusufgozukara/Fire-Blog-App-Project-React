import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import About from '../pages/About'
import Dashboard from '../pages/Dashboard'
import NotFound from '../pages/NotFound'

const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>

        
    </BrowserRouter>
    </>
  )
}

export default AppRouter