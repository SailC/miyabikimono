/* global setInterval */

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Wallop from 'Wallop'
import $ from 'jquery'

ReactDOM.render(<App />, document.getElementById('app'))
var wallopEl = document.querySelector('.Wallop')
var slider = new Wallop(wallopEl)

const colors = ['#00d1b2', '#8dccb4', '#c65c8e']
var i = 0
function goToNextSlide () {
  slider.next()
  $('.hero.is-primary').css('background-color', colors[++i % colors.length])
  $('.hero .button.is-primary').css('background-color', colors[i % colors.length])
  $('.hero .button.is-primary.is-inverted').css('background-color', '#fff')
  $('.hero .button.is-primary.is-inverted').css('color', colors[i % colors.length])
}

setInterval(goToNextSlide, 3000)
