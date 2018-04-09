import React from 'react';
import dict from '../dict';
import path from 'path';
import CalendarWidget from './CalendarWidget';
import classNames from 'classnames';
if (typeof document !== 'undefined') {
  require('./less/input-moment.less');
}
import { Link } from 'react-router-dom';

const CalendarSection = props => {
  const {
    language,
    isleftHidden,
    isRightHidden,
    m,
    handleChange,
    handleSave,
    repickTime
  } = props;

  let lang = language;
  let fontName2 = lang === 'en' || lang === 'ko' ? 'font-english' : 'font-tang';
  return (
    <section class="calendar-section section container" id="calendar-section">
      <div class={classNames('title', 'has-text-centered', 'is-2', fontName2)}>
        {dict[language]['nav-calendar']}
      </div>
      <div class="calendar-widget columns container">
        <div
          class={classNames('column', 'calendar-column', {
            'is-hidden': isleftHidden
          })}
        >
          <CalendarWidget
            moment={m}
            onChange={handleChange}
            onSave={handleSave}
            lang={language}
            // initForm={initDialogForm}
          />
        </div>
        <div
          class={classNames('column', 'messages', {
            'is-hidden': isRightHidden
          })}
        >
          <Message
            title={dict[language]['notes-title-1']}
            content={dict[language]['note1']}
            styleClass="is-primary"
            iconName="fa-money"
          />

          <Message
            title={dict[language]['notes-title-2']}
            content={`${dict[language]['note2']} ${m.format('LLLL')}`}
            styleClass="is-primary"
            iconName="fa-check-circle"
          />
          <div class="text-button has-text-centered">
            <Link
              to={path.join(props.match.url, '/form')}
              class="button is-primary is-outlined"
            >
              <span class="icon is-small">
                <i class="fa fa-check" />
              </span>

              <span class={classNames('title', 'is-5', fontName2)}>
                {dict[language]['confirm-time']}
              </span>
            </Link>
            <a
              class="button is-primary repick-time is-outlined"
              onClick={repickTime}
            >
              <span class="icon is-small">
                <i class="fa fa-clock-o" />
              </span>
              <span class={classNames('title', 'is-5', fontName2)}>
                {dict[language]['repick-time']}
              </span>
            </a>
            <Link to="/" class="button is-primary is-outlined">
              <span class="icon is-small">
                <i class="fa fa-home" />
              </span>
              <span class={classNames('title', 'is-5', fontName2)}>
                {dict[language]['nav-return']}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Message = props => {
  return (
    <article class={`message ${props.styleClass}`}>
      <div class="message-header">
        <p>
          <span class="icon">
            <i class={`fa ${props.iconName} is-small`} />
          </span>
          {props.title}
        </p>
      </div>
      <div class="message-body">
        <p>
          {props.content}
        </p>
      </div>
    </article>
  );
};
export { CalendarSection, Message };
