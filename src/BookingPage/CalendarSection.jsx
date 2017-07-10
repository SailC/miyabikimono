import React from 'react'
import dict from '../dict'
import CalendarWidget from './CalendarWidget'
import classNames from 'classnames'
import './less/input-moment.less'
import {
  Link
} from 'react-router-dom'

const CalendarSection = (props) => {
  const {
    language,
    isleftHidden,
    isRightHidden,
    m,
    handleChange,
    handleSave,
    repickTime
  } = props
  return (
    <section class='calendar-section section container' id='calendar-section'>
      <h1 class='title has-text-centered'>
        {dict[language]['nav-calendar']}
      </h1>
      <div class='calendar-widget columns container'>
        <div class={classNames(
          'column',
          'calendar-column',
          {'is-hidden': isleftHidden}
        )}>
          <CalendarWidget
            moment={m}
            onChange={handleChange}
            onSave={handleSave}
            lang={language}
                // initForm={initDialogForm}
          />
        </div>
        <div class={classNames(
          'column',
          'messages',
        {'is-hidden': isRightHidden})}>
          <Message title={dict[language]['notes-title-1']}
            content={dict[language]['note1']}
            styleClass='is-primary'
            iconName='fa-money'
          />

          <Message title={dict[language]['notes-title-2']}
            content={`${dict[language]['note2']} ${m.format('LLLL')}`}
            styleClass='is-primary'
            iconName='fa-check-circle'
          />
          <div class='text-button has-text-centered'>
            <Link to={`${props.match.url}/form`}
              class='button is-primary is-outlined'>
              <span class='icon is-small'>
                <i class='fa fa-check' />
              </span>
              <span>{dict[language]['confirm-time']}</span>
            </Link>
            {/* </Link> */}
            <a class='button is-primary repick-time' onClick={repickTime}>
              <span class='icon is-small'>
                <i class='fa fa-clock-o' />
              </span>
              <span>{dict[language]['repick-time']}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
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
export default CalendarSection