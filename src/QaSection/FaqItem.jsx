import React from 'react'

const FaqItem = (props) => {
  const {question, answer, askerName, answererName, askerUrl, answererUrl} = props
  return (
    <article class='media'>
      <figure class='media-left'>
        <p class='image is-64x64'>
          <img src={askerUrl} />
        </p>
      </figure>
      <div class='media-content'>
        <div class='content'>
          <p>
            <strong>{askerName}</strong>
            <p>{question}</p>
          </p>
        </div>

        <article class='media'>
          <figure class='media-left'>
            <p class='image is-48x48'>
              <img src={answererUrl} />
            </p>
          </figure>
          <div class='media-content'>
            <div class='content'>
              <p>
                <strong>{answererName}</strong>
                <p>{answer}</p>
              </p>
            </div>
          </div>
        </article>

      </div>
    </article>
  )
}

export default FaqItem
