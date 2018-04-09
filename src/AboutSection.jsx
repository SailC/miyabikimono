import React from 'react';
import abouts from './about';
import dict from './dict';
import classNames from 'classnames';

var language;

class AboutSection extends React.Component {
  render() {
    let { lang } = this.props;
    let fontName2 =
      lang === 'en' || lang === 'ko' ? 'font-english' : 'font-tang';
    language = lang;
    return (
      <div class="section about-section container" id="about-section">
        <h1 class={classNames('title', 'has-text-centered', 'is-2', fontName2)}>
          {dict[language]['nav-about']}
        </h1>
        <VideoPlayer />
        <AboutItems />
      </div>
    );
  }
}

const VideoPlayer = () =>
  <div class="video-wrapper">
    <div class="video">
      <div
        class="wistia_responsive_padding"
        style={{
          padding: '56.5% 0 0 0',
          position: 'relative'
        }}
      >
        <div
          class="wistia_responsive_wrapper"
          style={{
            height: '100%',
            left: '0',
            position: 'absolute',
            top: '0',
            width: '100%'
          }}
        >
          <span
            class="wistia_embed wistia_async_phknks26n7 popover=true popoverAnimateThumbnail=true videoFoam=true"
            style={{
              display: 'inline-block',
              height: '100%',
              width: '100%'
            }}
          >
            &nbsp;
          </span>
        </div>
      </div>
    </div>
  </div>;

const AboutItems = () => {
  return (
    <div class="about-items container">
      {Array.from(abouts, about =>
        <AboutItem
          key={about.id}
          title={about.title[language]}
          content={about.content[language]}
          url={about.url}
          reverse={about.id % 2 === 0}
        />
      )}
    </div>
  );
};

const AboutItem = props => {
  const { title, content, url, reverse } = props;
  if (reverse) {
    return (
      <div class="tile box about-item">
        <div class="columns is-mobile">
          <div class="column about-content">
            <p class="title">
              {title}
            </p>
            <p>
              {content}
            </p>
          </div>
          <div class="column is-6 about-image">
            <figure class="image is-128x128">
              <img src={url} />
            </figure>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div class="tile box about-item">
      <div class="columns is-mobile">
        <div class="column is-6 about-image">
          <figure class="image is-128x128">
            <img src={url} />
          </figure>
        </div>
        <div class="column about-content">
          <p class="title">
            {title}
          </p>
          <p>
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
