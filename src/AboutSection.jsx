import React from 'react'
import { Player, BigPlayButton } from 'video-react'
import abouts from './about'
import dict from './dict'

var language

class AboutSection extends React.Component {
  render () {
    let {lang} = this.props
    language = lang
    return (
      <div class='section about-section container' id='about-section'>
        <h1 class='title has-text-centered'>{dict[language]['nav-about']}</h1>
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
        // src='/video/intro.mp4' >
        src='https://r3---sn-p5qs7n7z.googlevideo.com/videoplayback?mn=sn-p5qs7n7z&mm=31&expire=1499841555&id=o-APSm-74gDarK6SDhxbt9u7mlRreCexnXoBGrQLHIBVKT&mime=video%2Fmp4&ip=2601%3A547%3A500%3A4865%3A902f%3Ae63b%3Ac5e8%3A848&sparams=dur%2Cei%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cexpire&itag=22&pl=26&dur=40.054&mv=m&source=youtube&ms=au&beids=%5B9466591%5D&requiressl=yes&mt=1499819873&ipbits=0&initcwndbps=1453750&lmt=1499796387699883&signature=3AF78CF8A99E7BAE2CF575E97BB2CC8480622735.2B16FFBDAB82A5347127AE528E6B02E534AEB797&key=yt6&ratebypass=yes&ei=sm9lWZSXN-OC8gSmrarQDA' >
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
