import React from 'react'
import connectIcon from '../../assets/connect_icon.svg'
import growIcon from '../../assets/grow_icon.svg'
import exploreIcon from '../../assets/explore_icon.svg'
import './cta.css'

// CTABox is a component that is used to create the three boxes in the CTA section

const CTABox = ({ icon, text, subtext, color }) => {
     return (
          <div className={`cta-connect ${color}`}>
               <div className='cta-connect-sphere'>
                    <img src={icon} />
               </div>
               <div className='cta-text'>
                    <p>{text}</p>
               </div>
               <p class="cta-subtext">{subtext}</p>
          </div>
     )
}

const CTA = () => {
     return (
          <div className='cta'>
               <div className='cta-container'>
                    <CTABox icon={connectIcon} text='connect' color='pink' subtext={'with new campus communities'}/>
                    <CTABox icon={growIcon} text='grow' color='blue' subtext={'academic success in your classes'}/>
                    <CTABox icon={exploreIcon} text='explore' color='yellow' subtext={'your academic interests and eagerness'}/>
               </div>
          </div>
     )
}

export default CTA