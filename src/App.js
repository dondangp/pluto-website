import React from 'react'

import {Article, Brand, CTA, Community, Navbar} from './components'

import {Features, Footer, Header, Intro, Mail} from './containers'

import './App.css'

const App = () => {
     return (
          <div className="App">

               <div className='header-bg'>
                    <Navbar />
                    <div className='centre-container'>
                         <Header />
                    </div>

               </div>

               <Community />
               <CTA />
               <Mail />

               <Features />

               {/* <Intro /> */}

          </div>
     )
}

export default App