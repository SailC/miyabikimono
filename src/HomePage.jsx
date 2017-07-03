import React from 'react'
import HeroSection from './HeroSection'
import ProductSection from './ProductSection'
import QaSection from './QaSection'

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
      console.log(1)
    } else if (language === '正體中文') {
      console.log(2)
    } else if (language === 'English') {
      console.log(3)
    } else {
      console.log(4)
    }
  }

  render () {
    return (
      <div class='home-page'>
        <HeroSection lang={this.state.lang} onLangChange={this.onLangChange.bind(this)} />
        <ProductSection lang={this.state.lang} onLangChange={this.onLangChange.bind(this)} />
        <QaSection lang={this.state.lang} onLangChange={this.onLangChange.bind(this)} />
      </div>
    )
  }
}

export default HomePage
