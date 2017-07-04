import React from 'react'
import FaqItem from './QaSection/FaqItem'
import StepItem from './QaSection/StepItem'
import faqs from './QaSection/faq'
import steps from './QaSection/step'
import dict from './dict'

var language

class QaSection extends React.Component {
  render () {
    const {lang} = this.props
    language = lang
    return (
      <div class='section qa-section container' id='qa-section'>
        <h1 class='title has-text-centered'>{dict[language]['nav-faq']}</h1>
        <div class='tile is-ancestor'>
          <div class='tile is-6 is-vertical is-parent'>
            <StepItems />
          </div>
          <div class='tile is-parent'>
            <div class='tile is-child box'>
              <FaqItems />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const StepItems = () => {
  return (
    <div class='step-items'>
      {
        Array.from(steps, (step) => (
          <StepItem
            key={step.id}
            title={step.title[language]}
            content={step.content[language]}
            url={step.url}
          />
        ))
      }
    </div>
  )
}

const FaqItems = () => {
  return (
    <div className='faq-items'>
      {
        Array.from(faqs, (faq) => (
          <FaqItem
            key={faq.id}
            question={faq.question[language]}
            answer={faq.answer[language]}
            askerName={faq.askerName[language]}
            askerUrl={faq.askerUrl}
            answererName={dict[language].answererName}
            answererUrl='/images/faq-section/service_miyabi.png'
          />
        ))
      }
    </div>
  )
}

export default QaSection
