import React from 'react'
import './form.css'

const Form = ({maintext,placeholder,buttext}) => {
     return (
          <div className='mail-container'>
               <div className='mail-title'>
                    {maintext}
               </div>
               
               <form className='mail-form'>
                    <input type="text" placeholder={placeholder}/>
                    <input type="button" value={buttext} />
               </form>
          </div>
     )
}

export default Form