import React from 'react'

import {Article, Brand, CTA, Navbar} from './components'

import {Features, Footer, Header, Intro, Mail} from './containers'

import './App.css'

const App = () => {
     return (
          <div className="App">

               <div className='header-bg'>
                    <Navbar />
                    <Header />

               </div>
               <Intro />
               <Features />
               <CTA />
               <Mail />

          </div>
     )
}

export default App