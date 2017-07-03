import React from 'react'
import FaqItem from './QaSection/FaqItem'
import StepItem from './QaSection/StepItem'

const url = 'http://bulma.io/images/placeholders/256x256.png'
const url1 = 'http://bulma.io/images/placeholders/128x128.png'

class QaSection extends React.Component {
  render () {
    return (
      <div class='section qa-section'>
        <div class='tile is-ancestor'>
          <div class='tile is-4 is-vertical is-parent'>
            <StepItem title='title' content='content' url={url} />
            <StepItem title='title' content='content' url={url} />
          </div>
          <div class='tile is-parent'>
            <div class='tile is-child box'>
              <FaqItem question='question'
                answer='answer'
                askerName='asker'
                answererName='answerer'
                askerUrl={url1}
                answererUrl={url1}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default QaSection
