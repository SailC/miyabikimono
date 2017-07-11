/* global cf */
import React from 'react'
import dict from '../dict'
import history from '../history'

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
    initForm(this.props.setFormData)
  }
  render () {
    const {lang} = this.props
    language = lang

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

function initForm (setFormData) {
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
    submitCallback: function () {
      var formData = conversationalForm.getFormData(true)
      setFormData(formData)

      history.push('/booking/confirm')

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

export default FormSection
