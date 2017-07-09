import React from 'react'
import moment from 'moment-timezone'
import {HeroHead} from '../HeroSection'
import CalendarWidget from './CalendarWidget'
import classNames from 'classnames'
import './less/input-moment.less'
import dict from '../dict'

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
    return (
      <div class='booking-page'>
        <div class='hero is-primary'>
          <HeroHead />
        </div>
        <section class='calendar-section section container' id='calendar-section'>
          <h1 class='title has-text-centered'>
            {dict[language]['nav-calendar']}
          </h1>
          <div class='calendar-widget columns container'>
            <div class={classNames(
              'column',
              'calendar-column',
              {'is-hidden': this.state.isleftHidden}
            )}>
              <CalendarWidget
                moment={this.state.m}
                onChange={this.handleChange.bind(this)}
                onSave={this.handleSave.bind(this)}
                lang={language}
                    // initForm={initDialogForm}
              />
            </div>
            <div class={classNames(
              'column',
              'messages',
            {'is-hidden': this.state.isRightHidden})}>
              <Message title={dict[language]['notes-title-1']}
                content={dict[language]['note1']}
                styleClass='is-primary'
                iconName='fa-money'
              />

              <Message title={dict[language]['notes-title-2']}
                content={`${dict[language]['note2']} ${this.state.m.format('LLLL')}`}
                styleClass='is-primary'
                iconName='fa-check-circle'
              />
              <div class='has-text-centered'>
                <a class='button is-primary is-outlined'>
                  <span class='icon is-small'>
                    <i class='fa fa-check' />
                  </span>
                  <span>{dict[language]['confirm-time']}</span>
                </a>
                <a class='button is-primary repick-time' onClick={this.repickTime.bind(this)}>
                  <span class='icon is-small'>
                    <i class='fa fa-clock-o' />
                  </span>
                  <span>{dict[language]['repick-time']}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
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

const Message = (props) => {
  return (
    <article class={`message ${props.styleClass}`}>
      <div class='message-header'>
        <p>
          <span class='icon'>
            <i class={`fa ${props.iconName} is-small`} />
          </span>
          {props.title}
        </p>
      </div>
      <div class='message-body'>
        <p>
          {props.content}
        </p>
      </div>
    </article>
  )
}

export default BookingPage
