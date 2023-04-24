import React from 'react'
import './mail.css'
import {Form} from '../../components'

const Mail = () => {
     return (
          <div className='mail'>
               <Form maintext={'Interested in our pilot progam? Enter your email below.'} placeholder='plutofan@pluto.com' buttext="Let's Rock"/>
          </div>
     )

}

export default Mail