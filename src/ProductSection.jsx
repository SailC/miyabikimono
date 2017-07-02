import React from 'react'
import ShowCards from './ProductSection/ShowCards'
import Pages from './ProductSection/Pages'
import Filter from './ProductSection/Filter'
import cards from './ProductSection/cards'

const language = 'zh'
const cardsPerPage = 6

class ProductSection extends React.Component {
  constructor () {
    super()
    this.state = {
      pageIndex: 0,
      cards: cards[language]
    }
  }

  pageClickListener (pageNum, e) {
    this.setState({
      pageIndex: pageNum
    })
  }

  render () {
    let pageNum = Math.floor(
        (this.state.cards.length - 1) / cardsPerPage
    ) + 1
    return (
      <section class='product-section section'>
        <Filter cards={this.state.cards} />
        <ShowCards cards={this.state.cards}
          pageIndex={this.state.pageIndex}
          cardsPerPage={cardsPerPage}
        />
        <Pages pageIndex={this.state.pageIndex}
          pageNum={pageNum}
          pageClickListener={this.pageClickListener.bind(this)}
        />
      </section>
    )
  }
}

export default ProductSection
