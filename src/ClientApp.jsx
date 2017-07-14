import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import history from './history'
// if (typeof (document) !== 'undefined') {
//   var history = require('./history')
// }
import {
  Router
} from 'react-router-dom'

if (typeof (document) !== 'undefined') {
  console.log('browser')
  ReactDOM.render((
    <Router history={history}>
      <App />
    </Router>
  ), document.getElementById('app'))
}
