import React from 'react'
import dict from '../dict.json'

const language = 'zh'
const text = dict[language]

const Sort = (props) => {
  const {sortClickListener} = props
  return (
    <div class='field has-addons has-addons-right'>
      <p class='control'>
        <span class='select'>
          <select onChange={sortClickListener}>
            <option>{text['sort1']}</option>
            <option>{text['sort2']}</option>
            <option>{text['sort3']}</option>
          </select>
        </span>
      </p>
    </div>
  )
}

export default Sort
