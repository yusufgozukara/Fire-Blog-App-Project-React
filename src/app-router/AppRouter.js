import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import About from '../pages/About'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Register from '../pages/Register'

const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>

        
    </BrowserRouter>
    </>
  )
}

export default AppRouter