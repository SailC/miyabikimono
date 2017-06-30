import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HeroSection from './HeroSection'

const App = () => (
  <BrowserRouter>
    <div className='app'>
      <Route exact path='/' component={HeroSection} />
    </div>
  </BrowserRouter>
)

export default App
