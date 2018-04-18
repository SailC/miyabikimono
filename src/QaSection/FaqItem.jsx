import React from 'react'
import classNames from 'classnames'

class FaqItem extends React.Component {
  constructor () {
    super()
    this.state = {
      isHidden: true
    }
  }

  toggleListener () {
    this.setState({
      isHidden: !(this.state.isHidden)
    })
  }

  render () {
    const {question, answer, askerName, answererName, askerUrl, answererUrl} = this.props
    return (
      <article class='media'>
        <figure class='media-left'>
          <p class='image is-64x64'>
            <img src={askerUrl} class='button' onClick={this.toggleListener.bind(this)} />
          </p>
        </figure>
        <div class='media-content'>
          <div class='content'>
            <strong>{askerName}</strong>
            <a onClick={this.toggleListener.bind(this)}><p>{question}</p></a>
          </div>

          <article class={classNames(
            'media',
            {'is-hidden': this.state.isHidden}
          )}>
            <figure class='media-left'>
              <p class='image is-48x48'>
                <img src={answererUrl} class='button' onClick={this.toggleListener.bind(this)} />
              </p>
            </figure>
            <div class='media-content'>
              <div class='content'>
                <strong>{answererName}</strong>
                <p>{answer}</p>
              </div>
            </div>
          </article>

        </div>
      </article>
    )
  }
}

export default FaqItem
