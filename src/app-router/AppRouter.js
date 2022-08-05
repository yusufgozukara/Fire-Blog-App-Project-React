import React, { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "../components/Navbar";
import AuthContextProvider from "../contexts/AuthContext";
import { BlogContext } from "../contexts/BlogContext";
import { AddBlog, UpdateBlogFunc } from "../helpers/functions";
import {ToastContainer} from "react-toastify";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import UpdateBlog from "../pages/UpdateBlog";
import { useNavigate } from 'react-router-dom'


const initialValues = {title :'', image:'', content:''};

const AppRouter = () => {
  const [newBlogTitle, setNewBlogTitle] = useState("");
  const [newBlogImage, setNewBlogImage] = useState("");
  const [newBlogContent, setNewBlogContent] = useState("");
  
  const [info, setInfo] = useState(initialValues);
  // const [user, setUser] =useState(null);
  
  // const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(info.id){
      UpdateBlogFunc(info)
    } else {
      AddBlog(info);
    }
    setInfo(initialValues);
    // navigate('/');
    
    
  }

  return (
    <>
    <AuthContextProvider>

      <BlogContext.Provider
        value={{ newBlogTitle, setNewBlogTitle,
          newBlogImage, setNewBlogImage,
          newBlogContent, setNewBlogContent,
          info, setInfo, handleSubmit }}
          >
        <BrowserRouter>
          <Navbar />
          <ToastContainer/>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />

            <Route path="/about" element={<PrivateRouter/>}>
              <Route path="" element={<About />} />
            </Route>
            <Route path="/profile" element={<PrivateRouter/>}>
              <Route path="" element={<Profile />} />
            </Route>
            <Route path="/newblog" element={<PrivateRouter/>}>
              <Route path="" element={<NewBlog />} />
            </Route>
            <Route path="/details/:id" element={<PrivateRouter/>}>
              <Route path="" element={<Details />} />
            </Route>
            <Route path="/updateblog/:id" element={<PrivateRouter/>}>
              <Route path="" element={<UpdateBlog />} />
            </Route>
            
          </Routes>
        </BrowserRouter>
      </BlogContext.Provider>
        </AuthContextProvider>
    </>
  );
};

export default AppRouter;
