import React, { useContext, useState } from 'react'
import '../Navbar/Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState( "Inicio" );
    
    const {getTotalCartAmount, token, setToken} = useContext(StoreContext)

    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/")
    }

  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt='' className='logo' /></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={() => setMenu('Inicio')} className={menu === 'Inicio'?"active":""}>Inicio</Link>
            <a href='#explore-menu' onClick={() => setMenu('Menú')} className={menu === 'Menú'?"active":""}>Menú</a>
            <a href='#app-download' onClick={() => setMenu('Mobile-app')} className={menu === 'Mobile-app'?"active":""}>Mobile-app</a>
            <a href='#footer' onClick={() => setMenu('Contáctanos')} className={menu === 'Contáctanos'?"active":""}>Contáctanos</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-sear-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount() === 0?"":"dot"}></div>
            </div>
            {!token
            ?<button onClick={() => setShowLogin(true)}>Iniciar sesión</button>
            : <div className="navbar-profile">
                <img src={assets.profile_icon} alt="" />
                <ul className="nav-profile-dropdown">
                    <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                    <hr />
                    <li onClick={logOut}><img src={assets.logout_icon} alt="" /><p>Salir</p></li>
                </ul>
            </div>
        }
            
        </div>
    </div>
  )
}

export default Navbar
