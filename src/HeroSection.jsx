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

const NavLeft = () =>
  <div class="nav-left">
    <span
      class="nav-item"
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <div class="field">
        <p class="control">
          <span class="select is-small is-primary has-text-centered">
            <select onChange={langChangeListener}>
              <option selected={language === 'zh-cn'}>简体中文</option>
              <option selected={language === 'zh-tw'}>正體中文</option>
              <option selected={language === 'en'}>English</option>
              <option selected={language === 'ja'}>日本語</option>
              <option selected={language === 'ko'}>한국어</option>
            </select>
          </span>
        </p>
      </div>
    </span>
  </div>;

const NavToggle = props => {
  let { isActive, toggleListener } = props;
  return (
    <span
      class={classNames('nav-toggle', { 'is-active': isActive })}
      onClick={toggleListener}
    >
      <span />
      <span />
      <span />
    </span>
  );
};

const NavRight = props => {
  let { isActive, toggleListener, lang } = props;
  return (
    <div
      class={classNames('nav-right', 'nav-menu', { 'is-active': isActive })}
      onClick={toggleListener}
    >
      <span class="nav-item">
        <Scrollchor to="#product-section" class="button is-primary nav-link">
        {text['nav-combo']}
        </Scrollchor>
      </span>
      <span class="nav-item">
        <Scrollchor to="#qa-section" class="button is-primary nav-link">
        Q&A
        </Scrollchor>
      </span>
      <span class="nav-item">
        <Scrollchor to="#girls-section" class="button is-primary nav-link">
          <span class="icon">
            <i class="fa fa-camera" />
          </span>
        </Scrollchor>
      </span>
      <span class="nav-item">
        <Scrollchor to="#about-section" class="button is-primary nav-link">
          {text['nav-about']}
        </Scrollchor>
      </span>
      <span class="nav-item">
        <Scrollchor to="#footer-section" class="button is-primary nav-link">
          <span class="icon">
            <i class="fa fa-wechat" />
          </span>
        </Scrollchor>
      </span>
    </div>
  );
};

class HeroHead extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };

    this.toggleListener = this.toggleListener.bind(this);
  }

  componentDidMount() {
    document.documentElement.addEventListener('scroll', this.scrollListener);
  }

  componentWillUnmount() {
    document.documentElement.removeEventListener('scroll', this.scrollListener);
  }

  scrollListener() {
    console.log(window.scrollY);
  }

  toggleListener() {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {
    return (
      <div class="hero-head">
        <header class="nav">
          <div class="container">
            <NavLeft />
            <NavToggle
              toggleListener={this.toggleListener}
              isActive={this.state.isActive}
            />
            <NavRight
              toggleListener={this.toggleListener}
              isActive={this.state.isActive}
              lang={this.props.lang}
            />
          </div>
        </header>
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
      <Link
        to="/booking"
        class="store-icon button is-primary is-inverted is-large"
      >
        <span class="icon">
          <i class="fa fa-calendar" />
        </span>
        <span class={fontName2}>
          {text['button-calendar']}
        </span>
      </Link>
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
      {/* <div class="column is-half has-text-centered">
        <img
          class="demo-img"
          src={`/images/mockup/${num}.png`}
          alt="iphone demo 1"
        />
      </div> */}
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
      <section class="hero is-primary is-fullheight" id="hero-section">
        <HeroHead lang={this.props.lang}/>

        <HeroBody lang={this.props.lang} />
      </section>
    );
  }
}

export { HeroSection, HeroHead };
