import React from 'react'
import dict from '../dict'

var language

const Card = (props) => {
  const {lang, card} = props
  language = lang
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
          <div class='media-content'>
            <div class='title is-4'>
              {card[language].name}
              <span class='item-price button is-danger'>
                {'￥' + card.price.toString()}
              </span>
            </div>
          </div>
        </div>

        <div class='content'>
          <div class='item-desc'>
            <div>
              <span class='item-feature button is-info'> {dict[language]['combo-desc']} </span>
              <span> {card[language].desc} </span>
            </div>
          </div>
          <div class='item-desc'>
            <p>
              <span class='item-feature button is-primary'> {dict[language]['combo-acc']} </span>
              {card[language].acc}
            </p>
          </div>
          <div class='item-desc'>
            <p>
              <span class='item-feature button is-warning'> {dict[language]['combo-hair']} </span>
              {card[language].hair}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
