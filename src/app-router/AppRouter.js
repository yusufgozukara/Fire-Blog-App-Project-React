import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Dashboard from '../pages/Dashboard'

const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <Dashboard/>
    </BrowserRouter>
    </>
  )
}

export default AppRouter