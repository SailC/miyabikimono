import React from 'react'
import dict from '../dict.json'

var language
var text
var filterClickListener

const CheckBox = (props) => {
  const {fieldName, text, size} = props
  return (
    <p class='control'>
      <label class='checkbox'>
        <input type='checkbox' onChange={
          filterClickListener.bind(this, fieldName, text)
        } />
        {text}
        <span class='tag is-light'>{size}</span>
      </label>
    </p>
  )
}

const Field = (props) => {
  const { fieldSet, fieldName, cards } = props
  return (
    <div class='facet'>
      <h5 class='facet-title font-tang title is-4'>{text[fieldName]}</h5>
      <div class='field'>
        {
          Array.from(fieldSet, (type) => {
            let size = cards.filter(card => card[language][fieldName] === type).length
            return (
              <CheckBox
                key={type}
                fieldName={fieldName}
                text={type}
                size={size}
              />
            )
          })
        }
      </div>
    </div>
  )
}

const Filter = (props) => {
  const {cards, filterClick, toggleListener, lang} = props
  filterClickListener = filterClick
  language = lang
  text = dict[language]

  let clothType = new Set(
    cards.map((card) => card[language]['cloth-type']).filter(
      (x) => x !== undefined
    )
  )
  let belt = new Set(cards.map((card) => card[language].belt).filter(
    (x) => x !== undefined
  ))
  let gender = new Set(cards.map((card) => card[language].gender).filter(
    (x) => x !== undefined
  ))
  let event = new Set(cards.map((card) => card[language].event).filter(
    (x) => x !== undefined
  ))
  return (
    <div class='filter-overlay'>
      <div class='filter-plate'>
        <a class='delete is-large' onClick={toggleListener} />
        <div id='filters'>
          <Field fieldSet={clothType}
            fieldName='cloth-type'
            cards={cards}
          />
          <Field fieldSet={belt}
            fieldName='belt'
            cards={cards}
          />
          <Field fieldSet={gender}
            fieldName='gender'
            cards={cards}
          />
          <Field fieldSet={event}
            fieldName='event'
            cards={cards}
          />
        </div>
      </div>
    </div>
  )
}

export default Filter
