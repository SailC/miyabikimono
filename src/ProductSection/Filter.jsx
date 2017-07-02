import React from 'react'
import dict from '../dict.json'

const language = 'zh'
const text = dict[language]

const CheckBox = (props) => {
  const {text} = props
  return (
    <p class='control'>
      <label class='checkbox'>
        <input type='checkbox' /> {text}
      </label>
    </p>
  )
}

const Field = (props) => {
  const { fieldSet, fieldName } = props
  return (
    <div class='facet'>
      <h5 class='facet-title'>{fieldName}</h5>
      <div class='field'>
        { Array.from(fieldSet, (type) => <CheckBox
          text={type}
          key={type}
        />) }
      </div>
    </div>
  )
}

const Filter = (props) => {
  const {cards} = props
  let clothType = new Set(
    cards.map((card) => card.clothType).filter(
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
  console.log(clothType)
  console.log(belt)
  console.log(gender)
  console.log(event)
  return (
    <div class='filter-overlay'>
      <div class='filter-plate'>
        <div id='filters'>
          <Field fieldSet={clothType} fieldName={text['cloth-type']} />
          <Field fieldSet={belt} fieldName={text['belt']} />
          <Field fieldSet={gender} fieldName={text['gender']} />
          <Field fieldSet={event} fieldName={text['event']} />
        </div>
      </div>
    </div>
  )
}

export default Filter
