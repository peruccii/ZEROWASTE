
import React from 'react'

import Login from './login/Login'

import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home/Home'

//import ProtectedRoutes from './ProtectedRoutes'
import Profile from './profile/Profile'
import Cadastro from './cadastro/Cadastro'
import Solicite from './solicite/Solicite'


const Routess = () => {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Login />} />

        <Route path='/home' element={
          //<ProtectedRoutes>
          <Home />
          //</ProtectedRoutes>

        } />

        <Route path='/profile' element={
          //<ProtectedRoutes>
          <Profile />
          //</ProtectedRoutes>
        } />

        <Route path='/cadastro' element={
          //<ProtectedRoutes>
          <Cadastro />
          //</ProtectedRoutes>
        } />

        <Route path='/solicite' element={
          //<ProtectedRoutes>
          <Solicite />
          //</ProtectedRoutes>
        } />


      </Routes>
    </Router>

  )
}

export default Routess