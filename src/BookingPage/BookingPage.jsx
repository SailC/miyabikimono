import React from 'react'
import moment from 'moment-timezone'
import {HeroHead} from '../HeroSection'
import CalendarWidget from './CalendarWidget'
import './less/input-moment.less'
import dict from '../dict'

var language

class BookingPage extends React.Component {
  constructor () {
    super()
    this.state = {
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
            <div class='column calendar-column'>
              <CalendarWidget
                moment={this.state.m}
                onChange={this.handleChange.bind(this)}
                onSave={this.handleSave.bind(this)}
                lang={language}
                    // initForm={initDialogForm}
              />
            </div>
            <div class='column messages'>
              <Message title={dict[language]['notes-title-1']}
                content={dict[language]['note1']}
                styleClass='is-dark'
                iconName='fa-money'
              />
              <Message title={dict[language]['notes-title-2']}
                content={dict[language]['note2']}
                styleClass='is-primary'
                iconName='fa-exclamation-circle'
              />
              <Message title={dict[language]['notes-title-3']}
                content={dict[language]['note3']}
                styleClass='is-primary'
                iconName='fa-calendar'
              />
              <Message title={dict[language]['notes-title-4']}
                content={dict[language]['note4']}
                styleClass='is-primary'
                iconName='fa-clock-o'
              />
              <Message title={dict[language]['notes-title-5']}
                content={dict[language]['note5']}
                styleClass='is-danger'
                iconName='fa-check-circle'
              />
            </div>
          </div>
          <div class='container has-text-centered' id='confirm-time'>
            <a class='button is-danger is-outlined'>
              <span class='icon is-small'>
                <i class='fa fa-check' />
              </span>
              <span>{dict[language]['confirm-time']}</span>
            </a>
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

  handleSave () {
    if (this.state.tab === 1) {
      // $('#booking-section').removeClass('hidden-section')
      // let time = $('.date-time').text()
      // initDialogForm(time)
      // $(document).scrollTop($('#booking-section').offset().top)
    } else {
      this.setState({tab: 1})
      // this.render()
    }
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
