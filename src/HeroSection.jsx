import React from 'react';
import classNames from 'classnames';
import dict from './dict.json';
import Wallop from 'Wallop';
import { Link } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';

// default to Chinese simplified
var language = 'zh';
var text = dict['zh'];
var langChangeListener;

const NavLeft = props => {
  let { toggleLangListener, toggleListener, isLangActive, isActive } = props;
  return (
    <div class="nav-left navbar-brand">
      <a class="navbar-item" href="#">
        <img src="/images/logo.png" alt="Miyabi" />
      </a>

      <span
        class="navbar-item"
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
        }}
        >
          <div class={classNames('dropdown', { 'is-active': isLangActive })}>
            <div class="dropdown-trigger">
              <button class="button is-primary is-medium is-size-6" aria-haspopup="true" aria-controls="dropdown-menu" onClick={toggleLangListener}>
                <span>{text['nav-lang']}</span>
                <span class="icon is-small">
                  <i class="fa fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
              <div class="dropdown-content">
                <a class="dropdown-item" onClick={
                  () => {
                    toggleLangListener();
                    langChangeListener('zh-cn');
                  }
                }>
                简体中文
              </a>
              <a class="dropdown-item" onClick={
                () => {
                  toggleLangListener();
                  langChangeListener('zh-tw');
                }
              }>
              正體中文
            </a>
            <a class="dropdown-item" onClick={
              () => {
                toggleLangListener();
                langChangeListener('en');
              }
            }>
            English
          </a>
          <a class="dropdown-item" onClick={
            () => {
              toggleLangListener();
              langChangeListener('ja');
            }
          }>
          日本語
        </a>
        <a class="dropdown-item" onClick={
          () => {
            toggleLangListener();
            langChangeListener('ko');
          }
        }>
        한국어
      </a>
    </div>
  </div>
</div>


</span>

<a
  role='button'
  class={classNames('navbar-burger',  { 'is-active': isActive })}
  onClick={toggleListener}
  aria-label='menu'
  aria-expanded='false'
  >
    <span aria-hidden="true"/>
    <span aria-hidden="true"/>
    <span aria-hidden="true"/>
  </a>
</div>);
};

const NavRight = props => {
  let { isActive, toggleListener, lang } = props;
  return (
    <div
      class={classNames('nav-right', 'navbar-menu', { 'is-active': isActive })}
      onClick={toggleListener}
      >
        <div class='navbar-end'>
            <Scrollchor to="#product-section" class='navbar-item is-medium is-size-6'>
                {text['nav-combo']}
            </Scrollchor>
            <Scrollchor to="#qa-section" class="navbar-item is-medium is-size-6">
              Q&A
            </Scrollchor>
            <Scrollchor to="#girls-section" class="navbar-item is-medium is-size-6">
              <span class="icon">
                <i class="fa fa-camera" />
              </span>
            </Scrollchor>
            <Scrollchor to="#about-section" class="navbar-item is-medium is-size-6">
              {text['nav-about']}
            </Scrollchor>
            <Scrollchor to="#footer-section" class="navbar-item is-medium is-size-6">
              <span class="icon">
                <i class="fa fa-wechat" />
              </span>
            </Scrollchor>
        </div>
      </div>
    );
  };

  class HeroHead extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        isActive: false, //for right burger
        isLangActive: false
      };

      this.toggleListener = this.toggleListener.bind(this);
      this.toggleLangListener = this.toggleLangListener.bind(this);
    }

    toggleListener() {
      this.setState({
        isActive: !this.state.isActive
      });
    }

    toggleLangListener() {
      this.setState({
        isLangActive: !this.state.isLangActive
      });
    }

    render() {
      return (
        <div class="hero-head">
          <nav class="navbar is-light is-fixed-top" role="navigation" aria-label="main navigation">
            <NavLeft
              toggleLangListener={this.toggleLangListener}
              toggleListener={this.toggleListener}
              isLangActive={this.state.isLangActive}
              isActive={this.state.isActive}
            />
            <NavRight
              toggleListener={this.toggleListener}
              isActive={this.state.isActive}
              lang={this.props.lang}
            />
          </nav>
        </div>
      );
    }
  }

  const HeroBody = props =>
  <div class="hero-body">
    <WallopSlides lang={props.lang} />
  </div>;

  const Headlines = props => {
    let { num, lang } = props;

    let fontName = lang === 'en' || lang === 'ko' ? 'font-english' : 'font-zhao';
    let fontName2 = lang === 'en' || lang === 'ko' ? 'font-english' : 'font-tang';

    return (
      <div class="container is-fluid has-text-centered">
        <h1 class={classNames('title', 'is-1', fontName)}>
          {' '}{text[`hero-title-${num}`]}{' '}
        </h1>
        <h2 class={classNames('subtitle', 'is-3', fontName)}>
          {text[`hero-subtitle-${num}`]}
        </h2>
        </div>
      );
    };

    const WallopSlides = props =>
    <div class="Wallop Wallop--fade" id="heroWallop">
      <div class="Wallop-list">
        <div class="Wallop-item">
          <WallopSlide num="1" lang={props.lang} />
        </div>
        <div class="Wallop-item">
          <WallopSlide num="2" lang={props.lang} />
        </div>
        <div class="Wallop-item">
          <WallopSlide num="3" lang={props.lang} />
        </div>
      </div>
    </div>;

    const WallopSlide = props => {
      let { num, lang } = props;
      return (
        <div class="columns container is-fluid">
          <div class="column">
            <Headlines num={num} lang={lang} />
          </div>
    </div>
  );
};

class HeroSection extends React.Component {
  componentDidMount() {
    if (typeof document !== 'undefined') {
      var heroWallop = document.querySelector('#heroWallop');
      var heroSlider = new Wallop(heroWallop);
      setInterval(() => {
        heroSlider.next();
      }, 3000);
    }
  }

  render() {
    let { lang, onLangChange } = this.props;
    langChangeListener = onLangChange;
    text = dict[lang];
    language = lang;
    return (
      <section class="hero is-light is-fullheight" id="hero-section">
        <HeroHead lang={this.props.lang}/>

        <HeroBody lang={this.props.lang} />
      </section>
    );
  }
}

export { HeroSection, HeroHead };
