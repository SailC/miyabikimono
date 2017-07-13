// modules/routes.js
import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import HomePage from './HomePage'
import BookingPage from './BookingPage/BookingPage'
import NoMatch from './NoMatch'

const routes = () => (
  <Switch>
    <Route exact path='/' render={props => (
      <HomePage {...props}
        lang={this.state.lang}
        onLangChange={this.onLangChange}
      />
    )}
    />
    <Route path='/booking' render={props => (
      <BookingPage {...props}
        lang={this.state.lang}
      />
    )}
    />
    <Route component={NoMatch} />
  </Switch>
)

export default routes
