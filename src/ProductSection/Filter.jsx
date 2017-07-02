import React from 'react'
import dict from '../dict.json'

const language = 'zh'
const text = dict[language]

var filterClickListener

const CheckBox = (props) => {
  const {fieldName, text} = props
  return (
    <p class='control'>
      <label class='checkbox'>
        <input type='checkbox' onChange={
          filterClickListener.bind(this, fieldName, text)
        } /> {text}
      </label>
    </p>
  )
}

const Field = (props) => {
  const { fieldSet, fieldName } = props
  return (
    <div class='facet'>
      <h5 class='facet-title'>{text[fieldName]}</h5>
      <div class='field'>
        { Array.from(fieldSet, (type) => <CheckBox
          key={type}
          fieldName={fieldName}
          text={type}
        />) }
      </div>
    </div>
  )
}

const Filter = (props) => {
  const {cards, filterClick} = props
  filterClickListener = filterClick
  let clothType = new Set(
    cards.map((card) => card['cloth-type']).filter(
      (x) => x !== undefined
    )
  )
  let belt = new Set(cards.map((card) => card.belt).filter(
    (x) => x !== undefined
  ))
  let gender = new Set(cards.map((card) => card.gender).filter(
    (x) => x !== undefined
  ))
  let event = new Set(cards.map((card) => card.event).filter(
    (x) => x !== undefined
  ))
  return (
    <div class='filter-overlay'>
      <div class='filter-plate'>
        <div id='filters'>
          <Field fieldSet={clothType} fieldName='cloth-type' />
          <Field fieldSet={belt} fieldName='belt' />
          <Field fieldSet={gender} fieldName='gender' />
          <Field fieldSet={event} fieldName='event' />
        </div>
      </div>
    </div>
  )
}

export default Filter
