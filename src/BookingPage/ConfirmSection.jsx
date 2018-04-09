import React from 'react';
import dict from '../dict';
import { Message } from './CalendarSection';
import { Link } from 'react-router-dom';
var $ = require('jquery');
import classNames from 'classnames';

class ConfirmSection extends React.Component {
  componentDidMount() {
    const { lang, data, moment } = this.props;
    data.time = moment.format('LLLL');
    data.language = lang;
    console.log(data);
    if (
      data.name === '' ||
      data.email === '' ||
      data.number_male === '' ||
      data.number_female === '' ||
      data.number_children === ''
    ) {
      return <div />;
    }

    $.ajax({
      url: '/email',
      type: 'POST',
      data: data,
      success: function(data) {},
      error: function(err) {
        console.log(err);
      }
    });
  }

  render() {
    const { lang, data, moment } = this.props;
    let fontName2 =
      lang === 'en' || lang === 'ko' ? 'font-english' : 'font-tang';
    data.time = moment.format('LLLL');
    data.language = lang;

    return (
      <section class="confirm-section section container">
        <h1 class={classNames('title', 'has-text-centered', 'is-2', fontName2)}>
          {dict[lang]['nav-confirm']}
        </h1>
        <table class="table is-striped">
          <tbody>
            <tr>
              <th>
                <span class="icon is-primary button">
                  <i class="fa fa-address-book" />
                </span>
                {dict[lang]['table-name']}
              </th>
              <td>
                <span>
                  {data['name']}
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <span class="icon is-primary button">
                  <i class="fa fa-clock-o" />
                </span>
                {dict[lang]['table-time']}
              </th>
              <td>
                {moment.format('LLLL')}
              </td>
            </tr>
            <tr>
              <th>
                <span class="icon is-primary button">
                  <i class="fa fa-home" />
                </span>
                {dict[lang]['table-location']}
              </th>
              <td>
                {data['location'][0]}
              </td>
            </tr>
            <tr>
              <th>
                <span class="icon is-primary button">
                  <i class="fa fa-male" />
                </span>
                {dict[lang]['table-male-num']}
              </th>
              <td>
                {data['number_male']}
              </td>
            </tr>
            <tr>
              <th>
                <span class="icon is-primary button">
                  <i class="fa fa-female" />
                </span>
                {dict[lang]['table-female-num']}
              </th>
              <td>
                {data['number_female']}
              </td>
            </tr>
            <tr>
              <th>
                <span class="icon is-primary button">
                  <i class="fa fa-child" />
                </span>
                {dict[lang]['table-children-num']}
              </th>
              <td>
                {data['number_children']}
              </td>
            </tr>
            <tr>
              <th>
                <span class="icon is-primary button">
                  <i class="fa fa-phone" />
                </span>
                {dict[lang]['table-phone']}
              </th>
              <td>
                {data['phone']}
              </td>
            </tr>
            <tr>
              <th>
                <span class="icon is-primary button">
                  <i class="fa fa-envelope" />
                </span>
                {dict[lang]['table-email']}
              </th>
              <td>
                {data['email']}
              </td>
            </tr>
            <tr>
              <th>
                <span class="icon is-primary button">
                  <i class="fa fa-weixin" />
                </span>
                {dict[lang]['table-wechat']}
              </th>
              <td>
                {data['wechat']}
              </td>
            </tr>
            <tr>
              <th>
                <span class="icon is-primary button">
                  <i class="fa fa-thumbs-o-up" />
                </span>
                {dict[lang]['table-requirement']}
              </th>
              <td>
                {data['requirement']}
              </td>
            </tr>
          </tbody>
        </table>

        <Message
          title={dict[lang]['confirm-title-1']}
          content={dict[lang]['confirm-msg-1'] + data['email']}
          styleClass="is-danger"
          iconName="fa-heart"
        />
        <Message
          title={dict[lang]['confirm-title-2']}
          content={dict[lang]['confirm-msg-2']}
          styleClass="is-primary"
          iconName="fa-calendar"
        />
        <div class="level">
          <div class="level-item button-links has-text-centered">
            <Link to="/" class="button is-primary">
              <span class="icon">
                <i class="fa fa-home" />
              </span>
              <span class={classNames(fontName2)}>
                {dict[lang]['nav-return']}
              </span>
            </Link>
          </div>
          <div class="level-item button-links has-text-centered">
            <Link to="/booking" class="button is-primary">
              <span class="icon">
                <i class="fa fa-calendar" />
              </span>
              <span class={classNames(fontName2)}>
                {dict[lang]['repick-time']}
              </span>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default ConfirmSection;
