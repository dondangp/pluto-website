import React from 'react'
import './footer.css'
import plutoLearningLogo from '../../assets/pluto-learning-logo.svg'

const Footer = () => {
     return (

          <div className='footer'>

               <div className='footer-info'>

                    <div className='footer-info-stamp'>
                         <img className=".footer-info-stamp-logo" src={plutoLearningLogo} />

                         <div className='footer-info-subtext'>
                              Connect. Grow. Explore.<br/>
                              Pluto Learning is a platform intended for educational purposes only.
                         </div>

                    </div>

                    <div className='footer-info-links'>
                         <h2 className='footer-info'>WEBSITE</h2>
                              <ul>
                                   <li className="nav-link">Home</li>
                                   <li className="nav-link">About</li>
                                   <li className="nav-link">Help</li>
                                   <li className="nav-link">Premium</li>
                                   <li className="nav-link">Get a Quote</li>
                              </ul>
                    </div>

                    <div className='footer-info-links'>
                         <h2 className='footer-info'>CONTACT US</h2>
                              <ul>
                                   <li className="nav-link">Email: contact@plutolearning.com</li>
                                   <li className="nav-link">Phone: (682)-219-3176 </li>
                              </ul>
                    
                    </div>

               </div>

               <div>
                    Footer Mail
               </div>
          </div>
     )
}

export default Footer