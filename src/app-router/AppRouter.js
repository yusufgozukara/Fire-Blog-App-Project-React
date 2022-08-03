import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import AuthContextProvider from "../contexts/AuthContext";
import { BlogContext } from "../contexts/BlogContext";
import { AddBlog } from "../helpers/functions";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";

const initialValues = {title :'', image:'', content:''};

const AppRouter = () => {
  const [newBlogTitle, setNewBlogTitle] = useState("");
  const [newBlogImage, setNewBlogImage] = useState("");
  const [newBlogContent, setNewBlogContent] = useState("");

  const [info, setInfo] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(info);
    AddBlog(info);
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
            <Route path="/details" element={<PrivateRouter/>}>
              <Route path="" element={<Details />} />
            </Route>



          </Routes>
        </BrowserRouter>
      </BlogContext.Provider>
        </AuthContextProvider>
    </>
  );
};

export default AppRouter;
