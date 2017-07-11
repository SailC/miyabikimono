import React from 'react'
import {
  Router,
  Route,
  Switch
} from 'react-router-dom'
import HomePage from './HomePage'
import BookingPage from './BookingPage/BookingPage'
import history from './history'
import NoMatch from './NoMatch'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      lang: 'zh-cn'
    }
    this.onLangChange = this.onLangChange.bind(this)
  }

  onLangChange (event) {
    let language = event.target.value
    // TODO: to be implemented , setState(lang)
    if (language === '简体中文') {
      console.log('zh')
    } else if (language === '正體中文') {
      console.log('cn')
    } else if (language === 'English') {
      console.log('en')
    } else {
      console.log('jp')
    }
  }

  render () {
    return (
      <Router history={history}>
        <div className='app'>
          <Switch>
            <Route exact path='/' render={props => (
              <HomePage {...props}
                lang={this.state.lang}
                onLangChange={this.state.onLangChange}
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
        </div>
      </Router>
    )
  }
}

export default App
