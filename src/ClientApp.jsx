/* global setInterval */

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Wallop from 'Wallop'

ReactDOM.render(<App />, document.getElementById('app'))
var heroWallop = document.querySelector('#heroWallop')
var girlWallop = document.querySelector('#girlWallop')
var heroSlider = new Wallop(heroWallop)
var girlSlider = new Wallop(girlWallop)

function goToNextSlide () {
  heroSlider.next()
}

setInterval(goToNextSlide, 3000)
