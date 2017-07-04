import React from 'react'
import Intro from './intro'
import dict from './dict'

var language

class GirlsSection extends React.Component {
  render () {
    let {lang} = this.props
    language = lang
    return (
      <div class='section girls-section container'>
        <Intro
          bossName={dict[language]['boss-name']}
          bossQuote={dict[language]['boss-quote']}
        />
        <WallopSlides />
      </div>
    )
  }
}

const GirlCard = () => {
  return (
    <div class='columns'>
      <div class='column is-half'>
        <figure class='image'>
          <img src='/images/girls-section/Picture3.png' />
        </figure>
      </div>
      <div class='column info'>
        <div class='card'>
          <div class='card-content'>
            <div class='media'>
              <div class='media-left'>
                <figure class='image is-48x48'>
                  <img src='http://bulma.io/images/placeholders/96x96.png' alt='Image' />
                </figure>
              </div>
              <div class='media-content'>
                <p class='title is-4'>John Smith</p>
                <p class='subtitle is-6'>@johnsmith</p>
              </div>
            </div>
            <div class='content'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris. <a>@bulmaio</a>.
              <a>#css</a> <a>#responsive</a>
              <br />
              <small>11:09 PM - 1 Jan 2016</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const WallopSlides = () => (
  <div class='Wallop Wallop--slide' id='girlWallop'>
    <div class='Wallop-list'>
      <div class='Wallop-item'>
        <WallopSlide url='http://pedroduarte.me/wallop/9d6648441fd2044ef03dc6b849b21eed.gif' />
      </div>
      <div class='Wallop-item'>
        <WallopSlide url='http://pedroduarte.me/wallop/567275306c02924439ba68bcf790ba16.gif' />
      </div>
      <div class='Wallop-item'>
        <WallopSlide url='http://pedroduarte.me/wallop/c086c7946c62720cfb4e32e0ad282b58.gif' />
      </div>
    </div>
    <button class='Wallop-buttonPrevious button is-primary' />
    <button class='Wallop-buttonNext button is-primary' />
  </div>
)

const WallopSlide = (props) => {
  let { url } = props
  return (
    // <img class='girl-img' src={url} alt='girl demo' />
    <GirlCard />
  )
}

export default GirlsSection
