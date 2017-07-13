import React from 'react'
import {Link} from 'react-router-dom'
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
        <Link class='ballon' to='/booking'>
          <svg class='booking-ballon ' version='1.1 ' xmlns='http://www.w3.org/2000/svg '
            width='24' height='24' viewBox='0 0 24 24 '>
            <title>calendar</title>
            <path d='M7.5 9h3v3h-3zM12 9h3v3h-3zM16.5 9h3v3h-3zM3 18h3v3h-3zM7.5 18h3v3h-3zM12 18h3v3h-3zM7.5 13.5h3v3h-3zM12 13.5h3v3h-3zM16.5 13.5h3v3h-3zM3 13.5h3v3h-3zM19.5 0v1.5h-3v-1.5h-10.5v1.5h-3v-1.5h-3v24h22.5v-24h-3zM21 22.5h-19.5v-16.5h19.5v16.5z ' />
          </svg>
        </Link>
      </div>
    )
  }
}

export default HomePage
