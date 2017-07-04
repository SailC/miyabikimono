import React from 'react'
import classNames from 'classnames'
import dict from './dict.json'

// default to Chinese simplified
var language = 'zh'
var text = dict['zh']
var langChangeListener

const NavLeft = () => (
  <div class='nav-left'>
    <a class='nav-item'>
      <img src='/images/logo-head.png' alt='Logo' />
    </a>
  </div>
)

const NavToggle = (props) => {
  let { isActive, toggleListener } = props
  return (
    <span class={classNames(
      'nav-toggle',
      {'is-active': isActive}
    )} onClick={toggleListener} >
      <span />
      <span />
      <span />
    </span>
  )
}

const NavRight = (props) => {
  let { isActive, toggleListener } = props
  return (
    <div class={classNames(
      'nav-right',
      'nav-menu',
      {'is-active': isActive}
    )} onClick={toggleListener}>
      <span class='nav-item'>
        <a href='#' class='button is-primary'>
          <span class='icon'>
            <i class='fa fa-female' />
          </span>
          <span class='icon is-small'>
            <i class='fa fa-plus' />
          </span>
          <span class='icon'>
            <i class='fa fa-male' />
          </span>
        </a>
      </span>
      <span class='nav-item'>
        <a href='#' class='button is-primary'>
          <span class='icon'>
            <i class='fa fa-calendar' />
          </span>
        </a>
      </span>
      <span class='nav-item'>
        <a href='#' class='button is-primary'>
          <span class='icon'>
            <i class='fa fa-question-circle' />
          </span>
        </a>
      </span>
      <span class='nav-item'>
        <a href='#' class='button is-primary'>
          <span class='icon'>
            <i class='fa fa-camera' />
          </span>
        </a>
      </span>
      <span class='nav-item'>
        <a href='#' class='button is-primary'>
          <span class='icon'>
            <i class='fa fa-users' />
          </span>
        </a>
      </span>
      <span class='nav-item'>
        <a href='#' class='button is-primary'>
          <span class='icon'>
            <i class='fa fa-wechat' />
          </span>
        </a>
      </span>
      <span class='nav-item'>
        <div class='field'>
          <p class='control'>
            <span class='select is-small is-primary has-text-centered'>
              <select onChange={langChangeListener}>
                <option>简体中文</option>
                <option>正體中文</option>
                <option>English</option>
                <option>日本語</option>
              </select>
            </span>
          </p>
        </div>
      </span>
    </div>
  )
}

class HeroHead extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      'isActive': false
    }

    this.toggleListener = this.toggleListener.bind(this)
  }

  toggleListener () {
    this.setState({
      'isActive': !this.state.isActive
    })
  }

  render () {
    return (
      <div class='hero-head'>
        <header class='nav'>
          <div class='container'>
            <NavLeft />
            <NavToggle toggleListener={this.toggleListener} isActive={this.state.isActive} />
            <NavRight toggleListener={this.toggleListener} isActive={this.state.isActive} />
          </div>
        </header>
      </div>
    )
  }
}

const HeroBody = () => (
  <div class='hero-body'>
    <WallopSlides />
  </div>
)

const Headlines = (props) => {
  let { num } = props
  return (
    <div class='container is-fluid has-text-centered'>
      <h1 class={classNames(
        'title',
        {'font-zhao': language === 'zh'}
      )}> {text[`hero-title-${num}`]} </h1>
      <h2 class={classNames(
        'subtitle',
        {'font-zhao': language === 'zh'}
      )}>{text[`hero-subtitle-${num}`]}</h2>
      <a href={text['apple-store-url']} target='_blank' class='store-icon button is-primary is-inverted'>
        <span class='icon is-small'>
          <i class='fa fa-apple' />
        </span>
        <span>{text['download-iphone']}</span>
      </a>
      <a href={text['google-play-url']} target='_blank' class='store-icon button is-primary is-inverted'>
        <span class='icon is-small'>
          <i class='fa fa-android' />
        </span>
        <span>{text['download-android']}</span>
      </a>
    </div>
  )
}

const WallopSlides = () => (
  <div class='Wallop Wallop--fade' id='heroWallop'>
    <div class='Wallop-list'>
      <div class='Wallop-item'>
        <WallopSlide num='1' />
      </div>
      <div class='Wallop-item'>
        <WallopSlide num='2' />
      </div>
      <div class='Wallop-item'>
        <WallopSlide num='3' />
      </div>
    </div>
  </div>
)

const WallopSlide = (props) => {
  let { num } = props
  return (
    <div class='columns container is-fluid'>
      <div class='column is-half'>
        <Headlines num={num} />
      </div>
      <div class='column is-half has-text-centered'>
        <img class='demo-img' src={`/images/mockup/${num}.png`} alt='iphone demo 1' />
      </div>
    </div>
  )
}

const HeroSection = (props) => {
  let {lang, onLangChange} = props
  langChangeListener = onLangChange
  text = dict[lang]
  language = lang
  return (
    <section class='hero is-primary' id='hero-section'>
      <HeroHead />
      <HeroBody />
    </section>
  )
}

export default HeroSection
