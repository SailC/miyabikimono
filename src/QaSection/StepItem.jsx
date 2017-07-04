import React from 'react'

const StepItem = (props) => {
  const {title, content, url} = props
  return (
    <div class='tile is-child box'>
      <div class='columns is-mobile'>
        <div class='column is-half step-image'>
          <figure class='image is-128x128'>
            <img src={url} />
          </figure>
        </div>
        <div class='column step-content'>
          <p class='title'>{title}</p>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default StepItem
