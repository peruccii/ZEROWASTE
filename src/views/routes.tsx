
import React from 'react'

import Login from './login/Login'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home/Home'

import ProtectedRoutes from './ProtectedRoutes'
import Profile from './profile/Profile'
import CadastroPage from './cadastro/components/CadastroPage'
import Cadastro from './cadastro/Cadastro'
import Solicite from './solicite/Solicite'


const Routess = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />

        <Route path='/zero-waste-front/home' element={
          //<ProtectedRoutes>
            <Home />
          //</ProtectedRoutes>

        } />

        <Route path='/zero-waste-front/profile' element={
          //<ProtectedRoutes>
            <Profile />
          //</ProtectedRoutes>
        }/>

        <Route path='/zero-waste-front/cadastro' element={
          //<ProtectedRoutes>
            <Cadastro />
          //</ProtectedRoutes>
        }/>

        <Route path='/zero-waste-front/solicite' element={
          //<ProtectedRoutes>
            <Solicite/>
          //</ProtectedRoutes>
        }/>

        
      </Routes>
    </Router>
  )
}

export default Routess