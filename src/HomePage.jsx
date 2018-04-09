import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from './HeroSection';
import ProductSection from './ProductSection';
import QaSection from './QaSection';
import GirlsSection from './GirlsSection';
import AboutSection from './AboutSection';
import FooterSection from './FooterSection';
import dict from './dict.json';

class HomePage extends React.Component {
  render() {
    let lang = this.props.lang;
    let fontName2 =
      lang === 'en' || lang === 'ko' ? 'font-english' : 'font-tang';
    return (
      <div class="home-page">
        <HeroSection
          lang={this.props.lang}
          onLangChange={this.props.onLangChange}
        />
        <ProductSection lang={this.props.lang} />
        <QaSection lang={this.props.lang} />
        <GirlsSection lang={this.props.lang} />
        <AboutSection lang={this.props.lang} />
        <FooterSection lang={this.props.lang} />
        <Link
          to="/booking"
          class="ballon store-icon button is-primary is-medium"
        >
          <span class="icon">
            <i class="fa fa-calendar" />
          </span>
          <span class={fontName2}>
            {dict[this.props.lang]['button-calendar']}
          </span>
        </Link>
      </div>
    );
  }
}

export default HomePage;
