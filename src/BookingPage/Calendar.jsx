var cx = require('classnames')
var blacklist = require('blacklist')
var React = require('react')
var range = require('lodash/range')
var chunk = require('lodash/chunk')
var moment = require('moment-timezone')

var today = moment().tz('Asia/Tokyo')
var firstDayOfThisMonth = today.clone().date(1)

var Day = React.createClass({
  displayName: 'Day',

  render () {
    var i = this.props.i
    var w = this.props.w
    var prevMonth = (w === 0 && i > 7)
    var nextMonth = (w >= 4 && i <= 14)
    var props = blacklist(this.props, 'i', 'w', 'd', 'className', 'm')
    props.className = cx({
      'prev-month': prevMonth,
      'next-month': nextMonth,
      'current-day': !prevMonth && !nextMonth && (i === this.props.d),
      'is-disabled': false
    })

    return <td {... props}>{i}</td>
  }
})

module.exports = React.createClass({
  displayName: 'Calendar',

  render () {
    var m = this.props.moment
    var d = m.date()
    var d1 = m.clone().subtract(1, 'month').endOf('month').date()
    var d2 = m.clone().date(1).day()
    var d3 = m.clone().endOf('month').date()

    var days = [].concat(
      range(d1 - d2 + 1, d1 + 1),
      range(1, d3 + 1),
      range(1, 42 - d3 - d2 + 1)
    )

    // var weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']// en
    var weeks = this.props.weeks
    // var weeks = this.props.week

    return (
      <div className={cx('m-calendar', this.props.className)}>
        <div className='toolbar'>
          <button type='button' className='prev-month' onClick={this.prevMonth}>
            <span class='icon'>
              <i class='fa fa-chevron-left is-small' />
            </span>
          </button>
          <span className='current-date'>{m.format('MMMM YYYY')}</span>
          <button type='button' className='next-month' onClick={this.nextMonth}>
            <span class='icon'>
              <i class='fa fa-chevron-right is-small' />
            </span>
          </button>
        </div>

        <table>
          <thead>
            <tr>
              {weeks.map((w, i) => <td key={i}>{w}</td>)}
            </tr>
          </thead>

          <tbody>
            {chunk(days, 7).map((row, w) => (
              <tr key={w}>
                {row.map((i) => (
                  <Day key={i} i={i} d={d} w={w}
                    onClick={this.selectDate.bind(null, i, w)}
                    m={this.props.moment}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  },

  selectDate (i, w) {
    var prevMonth = (w === 0 && i > 7)
    var nextMonth = (w >= 4 && i <= 14)
    var m = this.props.moment.clone()

    m.date(i)
    if (prevMonth) {
      m.subtract(1, 'month')
    }
    if (nextMonth) {
      m.add(1, 'month')
    }
    if (m > today) {
      this.props.onChange(m)
    }
  },

  prevMonth (e) {
    e.preventDefault()
    var m = this.props.moment.clone()
    m.subtract(1, 'month')
    if (m >= firstDayOfThisMonth) {
      this.props.onChange(m)
    }
  },

  nextMonth (e) {
    e.preventDefault()
    var m = this.props.moment.clone()
    m.add(1, 'month')
    this.props.onChange(m)
  }
})
