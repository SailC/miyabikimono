import React from 'react'
import dict from '../dict'
import Lightbox from 'react-images'

var language

class Card extends React.Component {
  constructor () {
    super()
    this.state = {
      isModalActive: false,
      gallerySlider: null,
      currentImage: 0
    }
    this.toggleListener = this.toggleListener.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.gotoImage = this.gotoImage.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
  }

  toggleListener () {
    this.setState({
      isModalActive: !(this.state.isModalActive)
    })
  }

  gotoPrevious () {
    this.setState({
      currentImage: this.state.currentImage - 1
    })
  }
  gotoNext () {
    this.setState({
      currentImage: this.state.currentImage + 1
    })
  }
  gotoImage (index) {
    this.setState({
      currentImage: index
    })
  }
  handleClickImage () {
    // only ten images
    if (this.state.currentImage === 10) return
    this.gotoNext()
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
              <button class='button' onClick={this.toggleListener} >
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

          <Lightbox
            currentImage={this.state.currentImage}
            images={
              Array.from(Array(11).keys()).map(id => (
                {src: `${card.baseurl}/${id}.jpg`}
              ))
            }
            isOpen={this.state.isModalActive}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            onClose={this.toggleListener}
            onClickImage={this.handleClickImage}
          />
        </div>
      </div>
    )
  }
}

export default Card
