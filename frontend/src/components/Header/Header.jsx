import React from 'react'
import '../Header/Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Ordena tu comida favorita aquí</h2>
        <p>Elija entre un variado menú que incluye una deliciosa variedad de platos elaborados con los mejores ingredientes y experiencia culinaria. Nuestra misión es satisfacer sus antojos y mejorar su experiencia gastronómica, una deliciosa comida a la vez.</p>
        <a href="#explore-menu"><button >Ver Menú</button></a>
      </div>
    </div>
  )
}

export default Header
