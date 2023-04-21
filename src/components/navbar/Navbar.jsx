import React from 'react'
import { RiMenu3Line, RiClloseLine} from 'react-icons/ri'
import logo from '../../assets/plutologo.svg'
import './navbar.css'

// BEM -> Block Element Modifier
// Block -> nav-bar
// Element -> nav-bar__menu
// Modifier -> nav-bar__menu--active

const Navbar = () => {
     return (
          <div className='nav-bar'>
               <div className='nav-bar-links'>
                    <div className='nav-bar_logo'>
                         <img src={logo} alt='logo' />
                    </div>

                    <div className='nav-bar-links-container'>
                         <p><a href="#home"></a>Home</p>
                         <p><a href="#abt"></a>About</p>
                         <p><a href="#help"></a>Help</p>
                         <p><a href="#money"></a>Premium</p>
                    </div>

                    <div className='nav-bar-links-signup'>
                         <button type="button">Sign Up</button>
                    </div>
               </div>
          </div>
     )

}

export default Navbar