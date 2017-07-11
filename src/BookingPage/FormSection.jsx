/* global cf */
import React from 'react'
import dict from '../dict'
// import classNames from 'classnames'
// import {
//   Link
// } from 'react-router-dom'

var language

const contextStyle = {
  position: 'absolute',
  top: '0',
  left: '0',
  height: '100%',
  width: '100%',
  zIndex: 250
}

class FormSection extends React.Component {
  componentDidMount () {
    initForm()
    console.log('mount')
  }
  render () {
    const {lang} = this.props
    language = lang
    console.log(lang, language)
    return (
      <section class='form-section section' id='form-section'>
        <div style={contextStyle} id='robot-form-context'>
          <form id='robot-form'>
            <input
              is
              cf-questions={dict[language].question1}
              cf-input-placeholder={dict[language].placeHolder1}
              class='input'
              type='text'
              name='name'
              required
            />
            <radiogroup
              is
              cf-questions={
                `${dict[language]['say-hello']} {previous-answer} ${
                  dict[language].question2
                }`}
              >
              <input
                is
                type='radio'
                cf-label={dict[language].location1}
                value='浅草'
                name='location'
              />
              <input
                is
                type='radio'
                cf-label={dict[language].location2}
                value='上野'
                name='location'
              />
            </radiogroup>
            <input
              is
              cf-questions={dict[language]['question3_1']}
              cf-input-placeholder={dict[language]['placeHolder3_1']}
              class='input'
              type='text'
              name='number_male'
              required
            />
            <input
              is
              cf-questions={dict[language]['question3_2']}
              cf-input-placeholder={dict[language]['placeHolder3_2']}
              class='input'
              type='text'
              name='number_female'
              required
            />
            <input
              is
              cf-questions={dict[language]['question3_3']}
              cf-input-placeholder={dict[language]['placeHolder3_3']}
              class='input'
              type='text'
              name='number_children'
              required
            />
            <input
              is
              cf-questions={dict[language]['question4']}
              cf-input-placeholder={dict[language]['placeHolder4']}
              class='input'
              type='text'
              name='email'
              required
            />
            <input
              is
              cf-questions={dict[language]['question5']}
              cf-input-placeholder={dict[language]['placeHolder5']}
              class='input'
              type='text'
              name='wechat'
            />
            <input
              is
              cf-questions={dict[language]['question6']}
              cf-input-placeholder={dict[language]['placeHolder6']}
              class='input'
              type='text'
              name='phone'
            />
            <radiogroup
              is
              cf-questions={
                  dict[language].question7
                }
              >
              <input
                is
                type='radio'
                cf-label={dict[language].via1}
                value='大众点评'
                name='via'
              />
              <input
                is
                type='radio'
                cf-label={dict[language].via2}
                value='搜索引擎'
                name='via'
              />
              <input
                is
                type='radio'
                cf-label={dict[language].via3}
                value='朋友介绍'
                name='via'
              />
              <input
                is
                type='radio'
                cf-label={dict[language].via4}
                value='新浪微博'
                name='via'
              />
              <input
                is
                type='radio'
                cf-label={dict[language].via5}
                value='Facebook'
                name='via'
              />
              <input
                is
                type='radio'
                cf-label={dict[language].via6}
                value='杂志'
                name='via'
              />
              <input
                is
                type='radio'
                cf-label={dict[language].via7}
                value='旅游攻略'
                name='via'
              />
              <input
                is
                type='radio'
                cf-label={dict[language].via8}
                value='其他'
                name='via'
              />
            </radiogroup>
            <input
              is
              cf-questions={dict[language]['question8']}
              cf-input-placeholder={dict[language]['placeHolder8']}
              class='input'
              type='text'
              name='requirement'
            />
            <radiogroup
              is
              cf-questions={
                  dict[language].question9
                }
              >
              <input
                is
                type='radio'
                cf-label={dict[language]['confirm-answer']}
                value='yes'
                name='yesorno'
              />
            </radiogroup>
          </form>
        </div>
      </section>
    )
  }
}

function initForm () {
  if (window.ConversationalForm) {
    window.ConversationalForm.remove()
  }
  var conversationalForm = new cf.ConversationalForm({
    formEl: document.getElementById('robot-form'),
    context: document.getElementById('robot-form-context'),
    userImage: '/images/user.png',
    robotImage: '/images/faq-section/service_miyabi.png',
    dictionaryData: {
      'input-placeholder': dict[language]['input-placeholder'],
      'input-placeholder-required': dict[language]['input-placeholder-required'],
      'user-reponse-missing': dict[language]['user-reponse-missing'],
      'user-reponse-missing-group': dict[language]['user-reponse-missing-group'],
      'input-placeholder-error': dict[language]['input-placeholder-error'],
      'entry-not-found': dict[language]['entry-not-found'],
      'group-placeholder': dict[language]['group-placeholder'],
      'input-no-filter': dict[language]['input-no-filter'],
      'user-reponse-and': dict[language]['user-reponse-and'],
      'general': dict[language]['general']
    }, // empty will throw error
    flowStepCallback: function (dto, success, error) {
      // if (dto.tag.name === 'yesorno' || dto.tag.name === 'requirement') {
        // let confirmMessage = generateConfirmMsg(conversationalForm.getFormData(true))
        // conversationalForm.addRobotChatResponse(confirmMessage)
        // $('cf-chat-response.robot:last-child > text').css('background-color', '#28a1fc')
        // $('cf-chat-response.robot:last-child > text').css('color', 'white')
      // }
      success()
    },
    submitCallback: function () {
      let email = conversationalForm.getFormData(true).email
      conversationalForm.addRobotChatResponse(
        `恭喜你完成表格的填写！预约确认的邮件稍后会发送至您的邮箱 ${email}, 请查收. 请再次确认页面下方的预约信息，如需修改，请点击重新预订按钮。`)
      // $('cf-chat-response.robot:last-child > text').css('background-color', '#28a1fc')
      // $('cf-chat-response.robot:last-child > text').css('color', 'white')
      var formData = conversationalForm.getFormData(true)
      console.log(formData)
      // formData['time'] = time
      // $('span#confirm-name').text(formData.name)
      // $('span#confirm-location').text(formData.location)
      // $('span#confirm-time').text(formData.time)
      // $('span#confirm-male').text(formData.number_male)
      // $('span#confirm-female').text(formData.number_female)
      // $('span#confirm-children').text(formData.number_children)
      // $('span#confirm-email').text(formData.email === undefined ? '无' : formData.email)
      // $('span#confirm-wechat').text(formData.wechat === undefined ? '无' : formData.wechat)
      // $('span#confirm-mobile').text(formData.phone === undefined ? '无' : formData.phone)
      // $('span#confirm-requirement').text(formData.requirement === undefined ? '无' : formData.requirement)
      // $('#booking-confirm-section').removeClass('hidden-section')
      // $('cf-chat scrollable').css('overflow-y', 'hidden')
      // $('cf-input').css('display', 'none')

      // $.ajax({
      //   url: '/booking',
      //   type: 'POST',
      //   data: formData,
      //   success: function (data) {
      //   },
      //   error: function () {
      //   }
      // })
    }
  })
}

export {
  FormSection,
  initForm
}
