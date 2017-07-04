import React from 'react'
import HeroSection from './HeroSection'
import ProductSection from './ProductSection'
import QaSection from './QaSection'
import GirlsSection from './GirlsSection'

class HomePage extends React.Component {
  constructor () {
    super()
    this.state = {
      lang: 'zh'
    }
  }

  onLangChange (event) {
    let language = event.target.value
    // TODO: to be implemented , setState(lang)
    if (language === '简体中文') {
      console.log('zh')
    } else if (language === '正體中文') {
      console.log('cn')
    } else if (language === 'English') {
      console.log('en')
    } else {
      console.log('jp')
    }
  }

  render () {
    return (
      <div class='home-page'>
        <HeroSection lang={this.state.lang} onLangChange={this.onLangChange.bind(this)} />
        <ProductSection lang={this.state.lang} />
        <QaSection lang={this.state.lang} />
        <GirlsSection lang={this.state.lang} />
      </div>
    )
  }
}

export default HomePage
