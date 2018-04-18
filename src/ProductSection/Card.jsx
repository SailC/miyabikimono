import React from 'react';
import dict from '../dict';
import Lightbox from 'react-images';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

var language;

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalActive: false,
      gallerySlider: null,
      currentImage: 0
    };
    this.toggleListener = this.toggleListener.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
  }

  toggleListener() {
    this.setState({
      isModalActive: !this.state.isModalActive
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }
  gotoImage(index) {
    this.setState({
      currentImage: index
    });
  }
  handleClickImage() {
    // only ten images
    if (this.state.currentImage === 10) return;
    this.gotoNext();
  }

  render() {
    const { lang, card } = this.props;
    language = lang;
    const BASE_DIR = '/images/service-section';
    let fontName2 =
      lang === 'en' || lang === 'ko' ? 'font-english' : 'font-tang';
    return (
      <div class="card">
        <div class="card-image">
          <figure class="image is-3by2">
            <img src={`${BASE_DIR}/big/${card.url}`} alt="Image" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <div class="title is-4">
                <span class={classNames(fontName2)}>
                  {card[language].name}{' '}
                </span>
                <span class="item-price button is-small is-danger">
                  {'￥' + card.price.toString()}
                </span>
              </div>
            </div>
          </div>
          <hr />

          <div class="content">
            <div class="item-desc combo-desc">
                <span
                  class={classNames(
                    fontName2,
                    'item-feature',
                    'button',
                    'is-primary',
                    'is-normal',
                    'is-outlined',
                    'is-static',
                    'is-rounded'
                  )}
                >
                  {dict[language]['combo-desc']}
                </span>
                <div>
                  {' '}{card[language].desc}{' '}
                </div>
            </div>

            <hr />

            <div class="item-desc">
                <span
                  class={classNames(
                    fontName2,
                    'item-feature',
                    'button',
                    'is-primary',
                    'is-normal',
                    'is-outlined',
                    'is-static',
                    'is-rounded'
                  )}
                >
                  {dict[language]['combo-acc']}
                </span>

              <div>
                {card[language].acc}
              </div>
            </div>

            <hr />

            <div class="item-desc">
              <span
                class={classNames(
                  fontName2,
                  'item-feature',
                  'button',
                  'is-primary',
                  'is-normal',
                  'is-outlined',
                  'is-static',
                  'is-rounded'
                )}
                >
                  {dict[language]['combo-hair']}
                </span>
                <div>
                  {card[language].hair}
                </div>
              </div>

              <hr />

              <div class="item-link has-text-centered">
                <a class="button is-primary is-rounded is-medium" onClick={this.toggleListener}>
                  <span class="icon is-normal">
                    <i class="fa fa-camera" />
                  </span>
                  <span class={classNames(fontName2, 'title', 'is-5')}>
                    {dict[language]['combo-photo']}
                  </span>
                </a>

            </div>
          </div>

          <Lightbox
            currentImage={this.state.currentImage}
            images={Array.from(Array(11).keys()).map(id => ({
              src: `${card.baseurl}/${id}.jpg`
            }))}
            isOpen={this.state.isModalActive}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            onClose={this.toggleListener}
            onClickImage={this.handleClickImage}
          />
        </div>
      </div>
    );
  }
}

export default Card;
