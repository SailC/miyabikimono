/* global cf */
import React from 'react';
import dict from '../dict';
import history from '../history';
import $ from 'jquery';

var language;

const contextStyle = {
  position: 'absolute',
  top: '0',
  left: '0',
  height: '90vh',
  width: '100vw',
  zIndex: 250
};

class FormSection extends React.Component {
  componentDidMount() {
    if (typeof document !== 'undefined') {
      initForm(this.props.setFormData);
    }
  }
  render() {
    const { lang } = this.props;
    language = lang;

    return (
      <section class="form-section section" id="form-section">
        <div style={contextStyle} id="robot-form-context">
          <form is id="robot-form" cf-prevent-autofocus>
            <input
              is
              cf-questions={dict[language].question1}
              cf-input-placeholder={dict[language].placeHolder1}
              class="input"
              type="text"
              name="name"
              required
            />
            <radiogroup
              is
              cf-questions={`${dict[language][
                'say-hello'
              ]} {previous-answer} ${dict[language].question2}`}
            >
              <input
                is
                type="radio"
                cf-label={dict[language].location1}
                value="浅草"
                name="location"
              />
              <input
                is
                type="radio"
                cf-label={dict[language].location2}
                value="上野"
                name="location"
              />
              <input
                is
                type="radio"
                cf-label={dict[language].location3}
                value="京都一号店"
                name="location"
              />
              <input
                is
                type="radio"
                cf-label={dict[language].location4}
                value="京都二号店"
                name="location"
              />
            </radiogroup>
            <input
              is
              cf-questions={dict[language]['question3_1']}
              cf-input-placeholder={dict[language]['placeHolder3_1']}
              class="input"
              type="text"
              name="number_male"
              required
            />
            <input
              is
              cf-questions={dict[language]['question3_2']}
              cf-input-placeholder={dict[language]['placeHolder3_2']}
              class="input"
              type="text"
              name="number_female"
              required
            />
            <input
              is
              cf-questions={dict[language]['question3_3']}
              cf-input-placeholder={dict[language]['placeHolder3_3']}
              class="input"
              type="text"
              name="number_children"
              required
            />
            <input
              is
              cf-questions={dict[language]['question4']}
              cf-input-placeholder={dict[language]['placeHolder4']}
              class="input"
              type="text"
              name="email"
              required
            />
            <input
              is
              cf-questions={dict[language]['question5']}
              cf-input-placeholder={dict[language]['placeHolder5']}
              class="input"
              type="text"
              name="wechat"
            />
            <input
              is
              cf-questions={dict[language]['question6']}
              cf-input-placeholder={dict[language]['placeHolder6']}
              class="input"
              type="text"
              name="phone"
            />
            <radiogroup is cf-questions={dict[language].question7}>
              <input
                is
                type="radio"
                cf-label={dict[language].via1}
                value="大众点评"
                name="via"
              />
              <input
                is
                type="radio"
                cf-label={dict[language].via2}
                value="搜索引擎"
                name="via"
              />
              <input
                is
                type="radio"
                cf-label={dict[language].via3}
                value="朋友介绍"
                name="via"
              />
              <input
                is
                type="radio"
                cf-label={dict[language].via4}
                value="新浪微博"
                name="via"
              />
              <input
                is
                type="radio"
                cf-label={dict[language].via5}
                value="Facebook"
                name="via"
              />
              <input
                is
                type="radio"
                cf-label={dict[language].via6}
                value="杂志"
                name="via"
              />
              <input
                is
                type="radio"
                cf-label={dict[language].via7}
                value="旅游攻略"
                name="via"
              />
              <input
                is
                type="radio"
                cf-label={dict[language].via8}
                value="其他"
                name="via"
              />
            </radiogroup>
            <input
              is
              cf-questions={dict[language]['question8']}
              cf-input-placeholder={dict[language]['placeHolder8']}
              class="input"
              type="text"
              name="requirement"
            />
            <radiogroup is cf-questions={dict[language].question9}>
              <input
                is
                type="radio"
                cf-label={dict[language]['confirm-answer']}
                value="yes"
                name="yesorno"
              />
            </radiogroup>
          </form>
        </div>
      </section>
    );
  }
}

function initForm(setFormData) {
  if (window.ConversationalForm) {
    window.ConversationalForm.remove();
  }
  var conversationalForm = new cf.ConversationalForm({
    formEl: document.getElementById('robot-form'),
    context: document.getElementById('robot-form-context'),
    userImage: '/images/user.png',
    robotImage: '/images/faq-section/service_miyabi.png',
    preventAutoFocus: true,
    dictionaryData: {
      'user-image': 'https://cf-4053.kxcdn.com/conversational-form/human.png',
      'awaiting-mic-permission': 'Awaiting mic permission',
      'user-audio-reponse-invalid': 'I didnt get that, try again.',
      'microphone-terminal-error': 'Audio input not supported',
      'icon-type-file':
        "<svg class='cf-icon-file' viewBox='0 0 10 14' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g transform='translate(-756.000000, -549.000000)' fill='#0D83FF'><g transform='translate(736.000000, 127.000000)'><g transform='translate(0.000000, 406.000000)'><polygon points='20 16 26.0030799 16 30 19.99994 30 30 20 30'></polygon></g></g></g></g></svg>",
      'input-placeholder-file-error': 'File upload failed ...',
      'input-placeholder-file-size-error': 'File size too big ...',
      'input-placeholder': dict[language]['input-placeholder'],
      'input-placeholder-required':
        dict[language]['input-placeholder-required'],
      'user-reponse-missing': dict[language]['user-reponse-missing'],
      'user-reponse-missing-group':
        dict[language]['user-reponse-missing-group'],
      'input-placeholder-error': dict[language]['input-placeholder-error'],
      'entry-not-found': dict[language]['entry-not-found'],
      'group-placeholder': dict[language]['group-placeholder'],
      'input-no-filter': dict[language]['input-no-filter'],
      'user-reponse-and': dict[language]['user-reponse-and'],
      general: dict[language]['general']
    }, // empty will throw error
    submitCallback: function() {
      var formData = conversationalForm.getFormData(true);
      setFormData(formData);
      history.push('/booking/confirm');
    }
  });
}

export default FormSection;
