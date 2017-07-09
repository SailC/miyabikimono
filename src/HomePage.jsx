import React from 'react'
import {HeroSection} from './HeroSection'
import ProductSection from './ProductSection'
import QaSection from './QaSection'
import GirlsSection from './GirlsSection'
import AboutSection from './AboutSection'
import FooterSection from './FooterSection'

class HomePage extends React.Component {
  render () {
    return (
      <div class='home-page'>
        <HeroSection lang={this.props.lang}
          onLangChange={this.props.onLangChange} />
        <ProductSection lang={this.props.lang} />
        <QaSection lang={this.props.lang} />
        <GirlsSection lang={this.props.lang} />
        <AboutSection lang={this.props.lang} />
        <FooterSection lang={this.props.lang} />
      </div>
    )
  }
}

export default HomePage
