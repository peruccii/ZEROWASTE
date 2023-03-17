import React from 'react'
import MenuLateral from './components/MenuLateral'
import HomePage from './components/HomePage'
import './styles/main.css'


const Home = () => {  
  return (
    <body>
        <div className='containerr'>
    <div>
      <MenuLateral/>
    </div>  
    <section className='home-section'>
      <HomePage/>
    </section>
    </div>
    </body>
  
  )
}

export default Home