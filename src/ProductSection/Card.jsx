import React from 'react'

const Card = (props) => {
  const {card} = props
  const BASE_DIR = '/images/service-section'
  return (
    <div class='card'>
      <div class='card-image'>
        <figure class='image is-3by2'>
          <img src={`${BASE_DIR}/big/${card.url}`} alt='Image' />
        </figure>
      </div>
      <div class='card-content'>
        <div class='media'>
          <div class='media-left'>
            <figure class='image is-3by2'>
              <img src='http://bulma.io/images/placeholders/96x96.png' alt='Image' />
            </figure>
          </div>
          <div class='media-content'>
            <p class='title is-4'>{card.id}</p>
            <p class='subtitle is-6'>@johnsmith</p>
          </div>
        </div>

        <div class='content'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a>#css</a> <a>#responsive</a>
          <small>11:09 PM - 1 Jan 2016</small>
        </div>
      </div>
    </div>
  )
}

export default Card
