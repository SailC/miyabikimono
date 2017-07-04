import React from 'react'
import FaqItem from './QaSection/FaqItem'
import StepItem from './QaSection/StepItem'
import faqs from './QaSection/faq'
import dict from './dict'

const url = 'http://bulma.io/images/placeholders/128x128.png'
var language

class QaSection extends React.Component {
  render () {
    const {lang} = this.props
    language = lang
    return (
      <div class='section qa-section'>
        <div class='tile is-ancestor'>
          <div class='tile is-4 is-vertical is-parent'>
            <StepItem title='title' content='content' url={url} />
            <StepItem title='title' content='content' url={url} />
            <StepItem title='title' content='content' url={url} />
            <StepItem title='title' content='content' url={url} />
            <StepItem title='title' content='content' url={url} />
            <StepItem title='title' content='content' url={url} />
            <StepItem title='title' content='content' url={url} />
            <StepItem title='title' content='content' url={url} />
          </div>
          <div class='tile is-parent'>
            <div class='tile is-child box'>
              {
                <FaqItems />
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
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
