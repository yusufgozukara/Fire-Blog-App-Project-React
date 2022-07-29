import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Dashboard from '../pages/Dashboard'

const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route/>
        </Routes>

        
        <Dashboard/>
    </BrowserRouter>
    </>
  )
}

export default AppRouter