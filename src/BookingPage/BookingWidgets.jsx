/* global cf */
import $ from 'jquery'
require('./less/input-moment.less')

var moment = require('moment-timezone')
var React = require('react')
var InputMoment = require('./CalendarWidget')

function setDateAnimation (date) {
  var year = date[0]
  var month = date[1]
  var day = date[2]
  var hour = date[3]
  var min = date[4]
  $('div.date#year').text(year + '年')
  $('div.date#month').text(month + '月')
  $('div.date#day').text(day + '日')
  $('div.date#hour').text(hour + '点')
  $('div.date#min').text(min + '分')
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
  var animationClass = 'animated pulse'
  $('div#date-item').addClass(animationClass).one(animationEnd, function () {
    $(this).removeClass('animated pulse')
  })
}

function initDialogForm (time) {
  if (typeof window.ConversationalForm === 'undefined') {
    var conversationalForm = new cf.ConversationalForm({
      formEl: document.getElementById('robot-form'),
      context: document.getElementById('robot-form-context'),
      dictionaryData: {
        'input-placeholder': '输入回复...',
        'input-placeholder-required': '请务必回答这个问题',
        'user-reponse-missing': '我没有',
        'user-reponse-missing-group': '我不知道答案',
        'input-placeholder-error': '您的输入格式不正确',
        'user-image': '/assets/img/human.png',
        'entry-not-found': '找不到这一项',
        'group-placeholder': '点击按钮来选择',
        'input-placeholder-file-error': '文件上传失败',
        'input-placeholder-file-size-error': '文件大小超过限制',
        'input-no-filter': '找不到包含关键字的结果',
        'user-reponse-and': ' 和',
        'general': '默认类型1 | 默认类型2',
        'icon-type-file': "<svg class='cf-icon-file' viewBox='0 0 10 14' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g transform='translate(-756.000000, -549.000000)' fill='#0D83FF'><g transform='translate(736.000000, 127.000000)'><g transform='translate(0.000000, 406.000000)'><polygon points='20 16 26.0030799 16 30 19.99994 30 30 20 30'></polygon></g></g></g></g></svg>"
      }, // empty will throw error
      flowStepCallback: function (dto, success, error) {
        if (dto.tag.name === 'yesorno' || dto.tag.name === 'requirement') {
          let confirmMessage = generateConfirmMsg(conversationalForm.getFormData(true))
          conversationalForm.addRobotChatResponse(confirmMessage)
          $('cf-chat-response.robot:last-child > text').css('background-color', '#28a1fc')
          $('cf-chat-response.robot:last-child > text').css('color', 'white')
        }
        success()
      },
      submitCallback: function () {
        let email = conversationalForm.getFormData(true).email
        conversationalForm.addRobotChatResponse(
          `恭喜你完成表格的填写！预约确认的邮件稍后会发送至您的邮箱 ${email}, 请查收. 请再次确认页面下方的预约信息，如需修改，请点击重新预订按钮。`)
        $('cf-chat-response.robot:last-child > text').css('background-color', '#28a1fc')
        $('cf-chat-response.robot:last-child > text').css('color', 'white')
        var formData = conversationalForm.getFormData(true)
        formData['time'] = time
        $('span#confirm-name').text(formData.name)
        $('span#confirm-location').text(formData.location)
        $('span#confirm-time').text(formData.time)
        $('span#confirm-male').text(formData.number_male)
        $('span#confirm-female').text(formData.number_female)
        $('span#confirm-children').text(formData.number_children)
        $('span#confirm-email').text(formData.email === undefined ? '无' : formData.email)
        $('span#confirm-wechat').text(formData.wechat === undefined ? '无' : formData.wechat)
        $('span#confirm-mobile').text(formData.phone === undefined ? '无' : formData.phone)
        $('span#confirm-requirement').text(formData.requirement === undefined ? '无' : formData.requirement)
        $('#booking-confirm-section').removeClass('hidden-section')
        $('cf-chat scrollable').css('overflow-y', 'hidden')
        $('cf-input').css('display', 'none')

        $.ajax({
          url: '/booking',
          type: 'POST',
          data: formData,
          success: function (data) {
          },
          error: function () {
          }
        })
      }
    })
  }
}

function generateConfirmMsg (formData) {
  let name = formData.name
  let location = formData.location[0]
  let numberMale = formData.number_male
  let numberFemale = formData.number_female
  let numberChildren = formData.number_children
  let phone = formData.phone === undefined ? '无' : formData.phone
  let email = formData.email === undefined ? '无' : formData.email
  let requirement = formData.requirement === undefined ? '无' : formData.requirement
  let wechat = formData.wechat === undefined ? '无' : formData.wechat
  let date = $('.date-time').text()
  return `以下是您的预约详情\n` +
         `姓名: ${name}\n` +
         `预约时间: ${date} (东京时间)\n` +
         `预约分店: ${location}\n` +
         `来店男士人数: ${numberMale}\n` +
         `来店女士人数: ${numberFemale}\n` +
         `来店儿童人数: ${numberChildren}\n` +
         `手机: ${phone}\n` +
         `电子邮箱: ${email}\n` +
         `微信号或者QQ号: ${wechat}\n` +
         `特殊要求: ${requirement}\n`
}

var BookingWidget = React.createClass({
  displayName: 'BookingWidget',

  getInitialState () {
    setDateAnimation(moment().tz('Asia/Tokyo').format('YYYY-MM-DD-HH-mm').split('-'))
    return {
      m: moment()
    }
  },

  render () {
    this.state.m.locale('zh-cn')
    return (
      <div className='app'>
        <form>
          <InputMoment
            moment={this.state.m}
            onChange={this.handleChange}
            onSave={this.handleSave}
            initForm={initDialogForm}
          />
        </form>
      </div>
    )
  },

  handleChange (m) {
    this.setState({ m })
    let currentTokyoTime = this.state.m.tz('Asia/Tokyo').format('YYYY-MM-DD-HH-mm')
    setDateAnimation(currentTokyoTime.split('-'))
    $('#step1-button').removeClass('hidden-section')
  },

  handleSave () {
    if (this.state.tab === 1) {
      $('#booking-section').removeClass('hidden-section')
      let time = $('.date-time').text()
      initDialogForm(time)
      $(document).scrollTop($('#booking-section').offset().top)
    } else {
      this.setState({tab: 1})
      this.render()
    }
  }
})

export default BookingWidget
