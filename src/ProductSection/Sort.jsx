import React from 'react'
import dict from '../dict.json'

const Sort = (props) => {
  const {sortClickListener, toggleListener, lang} = props
  return (
    <div class='field has-addons has-addons-right'>

      <p class='control'>
        <a class='button is-primary  filter-icon' onClick={toggleListener}>
          <span class='icon'>
            <i class='fa fa-sliders' />
          </span>
          <span>过滤器</span>
        </a>
        <span class='select'>
          <select onChange={sortClickListener}>
            <option>{dict[lang]['sort1']}</option>
            <option>{dict[lang]['sort2']}</option>
            <option>{dict[lang]['sort3']}</option>
          </select>
        </span>
      </p>
    </div>
  )
}

export default Sort
