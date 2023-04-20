import React from 'react'

import {Article, Brand, CTA, Navbar} from './components'

import {Features, Footer, Header, Intro, Mail} from './containers'

const App = () => {
     return (
          <div className="App">

               <div className='gradient__bg'>
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