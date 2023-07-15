import React from 'react'
import './header.css'
import logo from '../../assets/header_icon.svg'
const Header = () => {
     return (
          <div className='header'>
               <div className='header-title'>
               <div className="pluto_icon"><img src={logo} /></div>
               </div>
               <div className='header-subtitle'>
                    <h2>connect. grow. explore</h2>
               </div>

          </div>
     )

}

export default Header