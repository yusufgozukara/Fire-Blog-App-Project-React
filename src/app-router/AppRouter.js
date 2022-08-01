import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { BlogContext } from '../contexts/BlogContext'
import About from '../pages/About'
import Dashboard from '../pages/Dashboard'
import Details from '../pages/Details'
import Login from '../pages/Login'
import NewBlog from '../pages/NewBlog'
import NotFound from '../pages/NotFound'
import Profile from '../pages/Profile'
import Register from '../pages/Register'

const AppRouter = () => {

  const [title,setTitle] = useState('');

  return (
    <>
    <BlogContext.Provider value={{title,setTitle}}>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/newblog' element={<NewBlog/>}/>
            <Route path='/details' element={<Details/>}/>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
    </BlogContext.Provider>
    </>
  )
}

export default AppRouter