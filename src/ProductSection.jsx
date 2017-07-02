import React from 'react'
import ShowCards from './ProductSection/ShowCards'
import Pages from './ProductSection/Pages'

const cardsPerPage = 8
const totalCardNum = 32
var cardIndices = Array.from(Array(totalCardNum).keys())

class ProductSection extends React.Component {
  constructor () {
    super()
    this.state = {
      pageIndex: 0,
      showCardIndices: cardIndices
    }
  }

  pageClickListener (pageNum, e) {
    this.setState({
      pageIndex: pageNum
    })
  }

  render () {
    let pageNum = Math.floor(
        (this.state.showCardIndices.length - 1) / cardsPerPage
    ) + 1
    return (
      <section class='product-section section'>
        <ShowCards showCardIndices={this.state.showCardIndices}
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
