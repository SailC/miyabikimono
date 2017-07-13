import React from 'react'
import classNames from 'classnames'

const Pages = (props) => {
  const {pageIndex, pageNum, pageClickListener, prev, next} = props

  let pages = Array.from(Array(pageNum).keys(), (i) => {
    let boundPageClick = pageClickListener.bind(this, i)
    return (
      <li key={i} onClick={boundPageClick}>
        <a class={classNames(
          'pagination-link',
          {'is-current': i === pageIndex}
        )}>
          {i}
        </a>
      </li>
    )
  })
  let pagePrevListener = pageClickListener.bind(
    this, pageIndex - 1 <= 0 ? 0 : pageIndex - 1
  )
  let pageNextListener = pageClickListener.bind(
    this, pageIndex + 1 >= pageNum - 1 ? pageNum - 1 : pageIndex + 1
  )
  return (
    <nav class='pagination is-centered'>
      <a class='pagination-previous' onClick={pagePrevListener}>{prev}</a>
      <a class='pagination-next' onClick={pageNextListener}>{next}</a>
      <ul class='pagination-list'>
        { pages }
      </ul>
    </nav>
  )
}

export default Pages
