import React from 'react'
import moment from 'moment-timezone'
import CalendarSection from './CalendarSection'
import FormSection from './FormSection'
import ConfirmSection from './ConfirmSection'
import NoMatch from '../NoMatch'
// import dict from '../dict'
import {
  Route,
  Switch
} from 'react-router-dom'

var language

class BookingPage extends React.Component {
  constructor () {
    super()
    this.state = {
      isRightHidden: true,
      isleftHidden: false,
      m: moment().tz('Asia/Tokyo')
    }
  }

  render () {
    language = this.props.lang
    this.state.m.locale(language)
    let match = this.props.match
    return (
      <div class='booking-page'>
        <Switch>
          <Route exact path={`${match.url}`}
            render={props => (
              // <CalendarSection
              <CalendarSection {...props}
                language={language}
                isleftHidden={this.state.isleftHidden}
                isRightHidden={this.state.isRightHidden}
                m={this.state.m}
                handleChange={this.handleChange.bind(this)}
                handleSave={this.handleSave.bind(this)}
                repickTime={this.repickTime.bind(this)}
              />
             )}
           />
          <Route path={`${match.url}/form`}
            render={props => (
              <FormSection {...props}
                lang={language}
              />
             )}
           />
          <Route path={`${match.url}/confirm`}
            render={props => (
              <ConfirmSection {...props}
                lang={language}
              />
             )}
           />
          <Route component={NoMatch} />
        </Switch>
      </div>
    )
  }

  handleChange (m) {
    this.setState({ m })
    // let currentTokyoTime = this.state.m.tz('Asia/Tokyo').format('YYYY-MM-DD-HH-mm')
    // setDateAnimation(currentTokyoTime.split('-'))
    // $('#step1-button').removeClass('hidden-section')
  }

  handleSave (e) {
    this.setState({
      isRightHidden: false,
      isleftHidden: true
    })
  }

  repickTime (e) {
    this.setState({
      isRightHidden: true,
      isleftHidden: false
    })
  }
}

export default BookingPage
