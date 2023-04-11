import React from 'react'
import {Header, Footer} from '../components'

function HomePage() {
  return (
    <div className='home'>
        <Header />
        <p className='home__content'>какой то контент</p>
        <Footer />
    </div>
  )
}

export default HomePage