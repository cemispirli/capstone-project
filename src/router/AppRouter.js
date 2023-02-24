import React from 'react'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NewBlog from '../pages/NewBlog';
import UpdateBlog from '../pages/UpdateBlog';
import Detail from '../pages/Detail';
import Profile from '../pages/Profile';
import PrivateRouter from './PrivateRouter';


const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRouter />}>
        <Route path="/new-blog" element={<NewBlog />} />
        <Route path="/update-blog/:id" element={<UpdateBlog />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/profile" element={<Profile />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>

  )
}

export default AppRouter
