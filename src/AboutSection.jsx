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
        src='https://r8---sn-a8au-xfge.googlevideo.com/videoplayback?itag=22&ipbits=0&lmt=1499796387699883&expire=1499818135&mime=video%2Fmp4&key=yt6&requiressl=yes&source=youtube&ratebypass=yes&pcm2cms=yes&dur=40.054&initcwndbps=5377500&pl=21&sparams=dur%2Cei%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpcm2cms%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cexpire&ei=NxRlWbisGKPR8gSq5a7YBg&ip=129.42.208.179&id=o-AEzQXmqQPGM5AYf4SDHW9z8MnYVHFhfDdhZVh0ku3I19&mm=31&mn=sn-a8au-xfge&mt=1499796441&mv=m&signature=A751B84F80530DF8BE257470560F38384F418C46.8292D46EAB602818D20AE00976C4C98E7F6040C4&ms=au' >
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
