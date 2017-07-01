/* global setInterval */

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Wallop from 'Wallop'

ReactDOM.render(<App />, document.getElementById('app'))
var wallopEl = document.querySelector('.Wallop')
var slider = new Wallop(wallopEl)

function goToNextSlide () {
  slider.next()
}

setInterval(goToNextSlide, 3000)
