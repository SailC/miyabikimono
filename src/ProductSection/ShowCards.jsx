import React from 'react'
import Card from './Card'

const ShowCards = (props) => {
  const {showCardIndices, pageIndex, cardsPerPage} = props
  let showCardNum = showCardIndices.length
  let beginCard = pageIndex * cardsPerPage
  let endCard = (
      (pageIndex + 1) * cardsPerPage >= showCardNum
      ? showCardNum
      : (pageIndex + 1) * cardsPerPage
  )
  let showIndices = showCardIndices.slice(beginCard, endCard)
  let cards = Array.from(showIndices, (i) => (
    <Card key={i} id={i} />
  ))
  return <div class='container product-list'>{cards}</div>
}

export default ShowCards
