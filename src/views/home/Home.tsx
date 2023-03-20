import React, { useState } from 'react'
import MenuLateral from './components/MenuLateral'
import HomePage from './components/HomePage'
import './styles/main.css'
import Particles from 'react-particles'



const Home = () => {





  return (



    <body>
     
      <div className='containerr'>
        <div>
          <MenuLateral />
        </div>
        <section className='home-section-home'>
          <HomePage />
        </section>
      </div>
    </body>
  )
}

export default Home