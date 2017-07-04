import React from 'react'
import { Player, BigPlayButton } from 'video-react'
import abouts from './about'

var language

class AboutSection extends React.Component {
  render () {
    let {lang} = this.props
    language = lang
    return (
      <div class='section about-section container'>
        <VideoPlayer />
        <AboutItems />
      </div>
    )
  }
}

const VideoPlayer = () => (
  <div class='video-wrapper'>
    <div class='video'>
      <Player
        playsInline
        poster='/images/logo-landscape.png'
        src='/video/intro.mp4' >
        <BigPlayButton position='center' />
      </Player>
    </div>
  </div>
)

const AboutItems = () => {
  return (
    <div class='about-items container'>
      {
        Array.from(abouts, (about) => (
          <AboutItem
            key={about.id}
            title={about.title[language]}
            content={about.content[language]}
            url={about.url}
            reverse={about.id % 2 === 0}
          />
        ))
      }
    </div>
  )
}

const AboutItem = (props) => {
  const {title, content, url, reverse} = props
  if (reverse) {
    return (
      <div class='tile box about-item'>
        <div class='columns is-mobile'>
          <div class='column about-content'>
            <p class='title'>{title}</p>
            <p>{content}</p>
          </div>
          <div class='column is-6 about-image'>
            <figure class='image is-128x128'>
              <img src={url} />
            </figure>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div class='tile box about-item'>
      <div class='columns is-mobile'>
        <div class='column is-6 about-image'>
          <figure class='image is-128x128'>
            <img src={url} />
          </figure>
        </div>
        <div class='column about-content'>
          <p class='title'>{title}</p>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
