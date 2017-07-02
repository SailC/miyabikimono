import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './HomePage'

const App = () => (
  <BrowserRouter>
    <div className='app'>
      <Route exact path='/' component={HomePage} />
    </div>
  </BrowserRouter>
)

export default App
