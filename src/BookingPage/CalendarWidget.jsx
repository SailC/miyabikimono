import $ from 'jquery'
var cx = require('classnames')
var blacklist = require('blacklist')
var React = require('react')
var Calendar = require('./Calendar')
var Time = require('./Time')
var dict = require('../dict')

module.exports = React.createClass({
  displayName: 'InputMoment',

  getInitialState () {
    return {
      tab: 0
    }
  },

  getDefaultProps () {
    return {
      prevMonthIcon: 'ion-ios-arrow-left',
      nextMonthIcon: 'ion-ios-arrow-right'
    }
  },

  render () {
    let lang = this.props.lang
    const DATE_TAB_NAME = dict[lang]['date']
    const TIME_TAB_NAME = dict[lang]['time']
    const SAVE_BUTTON_NAME = dict[lang]['next-step']
    var tab = this.state.tab
    var m = this.props.moment
    var props = blacklist(this.props, 'className', 'moment', 'prevMonthIcon', 'nextMonthIcon', 'onSave', 'initForm')
    props.className = cx('m-input-moment', this.props.className)

    return (
      <div {...props}>
        <div className='options'>
          <button type='button' className={cx('ion-calendar im-btn', {'is-active': tab === 0})} onClick={this.handleClickTab.bind(null, 0)}>
            <span class='icon'>
              <i class='fa fa-calendar is-small' />
            </span>
            {DATE_TAB_NAME}
          </button>
          <button type='button' className={cx('ion-clock im-btn', {'is-active': tab === 1})} onClick={this.handleClickTab.bind(null, 1)}>
            <span class='icon'>
              <i class='fa fa-clock-o is-small' />
            </span>
            {TIME_TAB_NAME}
          </button>
        </div>

        <div className='tabs'>
          <Calendar
            className={cx('tab', {'is-active': tab === 0})}
            moment={m}
            onChange={this.props.onChange}
            prevMonthIcon={this.props.prevMonthIcon}
            nextMonthIcon={this.props.nextMonthIcon}
            weeks={dict[lang]['weeks']}
          />
          <Time
            className={cx('tab', {'is-active': tab === 1})}
            moment={m}
            onChange={this.props.onChange}
            hour={dict[lang]['hour']}
            minute={dict[lang]['minute']}
          />
        </div>

        <button type='button' className={'im-btn btn-save'}
          onClick={this.handleSave}>
          <span class='icon'>
            <i class='fa fa-arrow-right is-small' />
          </span>
          {SAVE_BUTTON_NAME}
        </button>

      </div>
    )
  },

  handleClickTab (tab, e) {
    e.preventDefault()
    this.setState({tab: tab})
  },

  handleSave (e) {
    e.preventDefault()
    if (this.state.tab === 1) {
      $('#booking-section').removeClass('hidden-section')
      let time = $('.date-time').text()
      this.props.initForm(time)
      $(document).scrollTop($('cf-chat').offset().top)
    } else {
      this.setState({tab: 1})
    }
  }
})
