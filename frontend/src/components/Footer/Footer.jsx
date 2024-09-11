import React from 'react'
import './Footer.css'
import {assets} from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt sed sit deleniti consectetur eveniet praesentium facere repellat error expedita labore non eum, dicta nam at cum nostrum aperiam hic.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPAÑÍA</h2>
          <ul>
            <li>Inicio</li>
            <li>Acerca de</li>
            <li>Envíos</li>
            <li>Política de privacidad</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Ponte en contacto</h2>
          <ul>
            <li>+52 212-456-789</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 © Tomato.com - Todos los Derechos Revervados.</p>
    </div>
  )
}

export default Footer
