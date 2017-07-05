import React from 'react'
import Card from './Card'

const ShowCards = (props) => {
  const {cards, pageIndex, cardsPerPage, lang} = props
  let showCardNum = cards.length
  let beginCard = pageIndex * cardsPerPage
  let endCard = (
      (pageIndex + 1) * cardsPerPage >= showCardNum
      ? showCardNum
      : (pageIndex + 1) * cardsPerPage
  )
  let showCards = cards.slice(beginCard, endCard)
  showCards = showCards.map((card) => (
    <Card key={card.id} card={card} lang={lang} />
  ))
  return <div class='product-list'>{showCards}</div>
}

export default ShowCards
