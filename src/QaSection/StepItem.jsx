import React from 'react'

const StepItem = (props) => {
  const {title, content, url} = props
  return (
    <div class='tile is-child box'>
      <p class='title'>{title}</p>
      <div class='columns'>
        <div class='column is-half'>
          <figure class='image is-256x256'>
            <img src={url} />
          </figure>
        </div>
        <div class='column'>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default StepItem
