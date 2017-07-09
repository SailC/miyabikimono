/* global setInterval */

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Wallop from 'Wallop'

ReactDOM.render(<App />, document.getElementById('app'))
var heroWallop = document.querySelector('#heroWallop')
var girlWallop = document.querySelector('#girlWallop')

if (heroWallop) {
  var heroSlider = new Wallop(heroWallop)
  var girlSlider = new Wallop(girlWallop)
  setInterval(goToNextSlide, 3000)
}

function goToNextSlide () {
  heroSlider.next()
}
