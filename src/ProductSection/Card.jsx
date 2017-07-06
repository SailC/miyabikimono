import React from 'react'
import dict from '../dict'
import classNames from 'classnames'
import Wallop from 'Wallop'

var language

class Card extends React.Component {
  constructor () {
    super()
    this.state = {
      isModalActive: false,
      gallerySlider: null
    }
  }

  toggleListener () {
    if (this.state.gallerySlider === null) {
      let id = this.props.card.id
      let galleryWallop = document.querySelector(`#gallery${id}`)
      this.state.gallerySlider = new Wallop(galleryWallop)
    }
    this.setState({
      isModalActive: !(this.state.isModalActive)
    })
  }

  render () {
    const {lang, card} = this.props
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
              <div class='title is-5'>
                {card[language].name}
                <span class='item-price button is-danger is-small is-outlined'>
                  {'￥' + card.price.toString()}
                </span>
              </div>
            </div>
          </div>

          <div class='content'>
            <div class='item-desc'>
              <div>
                <span class='item-feature button is-primary is-small is-outlined'>
                  {dict[language]['combo-desc']}
                </span>
                <span> {card[language].desc} </span>
              </div>
            </div>
            <div class='item-desc'>
              <p>
                <span class='item-feature button is-primary is-outlined is-small'>
                  {dict[language]['combo-acc']}
                </span>
                {card[language].acc}
              </p>
            </div>
            <div class='item-desc'>
              <p>
                <span class='item-feature button is-primary is-outlined is-small'>
                  {dict[language]['combo-hair']}
                </span>
                {card[language].hair}
              </p>
            </div>
            <div class='item-link has-text-centered'>
              <button class='button' onClick={
                this.toggleListener.bind(this)
              } >
                <span class='icon'>
                  <i class='fa fa-camera' />
                </span>
                <span>
                  {dict[language]['combo-photo']}
                </span>
              </button>
              <button class='button'>
                <span class='icon'>
                  <i class='fa fa-calendar' />
                </span>
                <span>
                  {dict[language]['combo-book']}
                </span>
              </button>
            </div>
          </div>

          <Gallery
            toggleListener={this.toggleListener.bind(this)}
            isModalActive={this.state.isModalActive}
            baseurl={card.baseurl}
            id={card.id}
          />
        </div>
      </div>
    )
  }
}

const Gallery = (props) => {
  const {toggleListener, isModalActive, baseurl, id} = props
  return (
    <div class={classNames(
      'modal',
      {'is-active': isModalActive}
    )}>
      <div class='modal-background' />
      <div class='modal-content'>
        <WallopSlides baseurl={baseurl} id={id} />
      </div>
      <button class='modal-close is-large' onClick={
        toggleListener
      } />
    </div>
  )
}

const WallopSlides = (props) => {
  const {baseurl, id} = props
  return (
    <div class='Wallop' id={`gallery${id}`}>
      <div class='Wallop-list'>
        {
          Array.from(Array.from(
            Array(10).keys()
          ), (id) => (
            <div class='Wallop-item' key={id}>
              <img src={`${baseurl}/${id + 1}.jpg`} />
            </div>
          ))
        }
      </div>
      <button class='Wallop-buttonPrevious button is-primary' />
      <button class='Wallop-buttonNext button is-primary' />
    </div>
  )
}

export default Card
