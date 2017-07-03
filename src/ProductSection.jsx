import React from 'react'
import ShowCards from './ProductSection/ShowCards'
import Pages from './ProductSection/Pages'
import Filter from './ProductSection/Filter'
import cards from './ProductSection/cards'

const language = 'zh'
const cardsPerPage = 6

const allCards = cards[language]
class ProductSection extends React.Component {
  constructor () {
    super()
    this.state = {
      pageIndex: 0,
      cards: allCards,
      filters: {}
    }
  }

  pageClickListener (pageNum, event) {
    this.setState({
      pageIndex: pageNum
    })
  }

  filterClickListener (fieldName, fieldVal, event) {
    let newFilters = this.state.filters
    if (event.target.checked) {
      if (fieldName in newFilters) {
        if (!(fieldVal in newFilters[fieldName])) {
          newFilters[fieldName].push(fieldVal)
        }
      } else {
        newFilters[fieldName] = [fieldVal]
      }
    } else {
      let newVals = newFilters[fieldName].filter(
        (val) => val !== fieldVal
      )
      newFilters[fieldName] = newVals
    }
    let newCards = allCards.filter(card => {
      for (let fieldName in newFilters) {
        let fieldVals = newFilters[fieldName]
        for (let fieldVal of fieldVals) {
          if (card[fieldName] !== fieldVal) {
            return false
          }
        }
      }
      return true
    })

    this.setState({
      pageIndex: 0,
      filters: newFilters,
      cards: newCards
    })
  }

  render () {
    let pageNum = Math.floor(
        (this.state.cards.length - 1) / cardsPerPage
    ) + 1
    return (
      <section class='product-section section'>
        <Filter cards={this.state.cards} filterClick={
          this.filterClickListener.bind(this)
        } />
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
