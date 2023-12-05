import React from 'react'
import {BrowserRouter,Route,Routes} from'react-router-dom'
import Login  from './pages/login'
import Home from './pages/home'
import Signup from './pages/signup'
import Write from './pages/write'
import Post from './pages/post'
import './App.css'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/write' element={<Write />}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='/' element={<Home />}/>
        <Route path='/post/:id' element={<Post/>}/>
      </Routes>
    </BrowserRouter>
  )
}