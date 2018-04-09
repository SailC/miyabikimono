import React from 'react';
import Intro from './intro';
import dict from './dict';
import girls from './girl';
import Wallop from 'Wallop';
import classNames from 'classnames';

var language;

class GirlsSection extends React.Component {
  componentDidMount() {
    if (typeof document !== 'undefined') {
      var girlWallop = document.querySelector('#girlWallop');
      let girlSlider = new Wallop(girlWallop);
    }
  }

  render() {
    let { lang } = this.props;
    let fontName2 =
      lang === 'en' || lang === 'ko' ? 'font-english' : 'font-tang';
    language = lang;
    return (
      <div class="section girls-section container" id="girls-section">
        <h1 class={classNames('title', 'has-text-centered', 'is-2', fontName2)}>
          {dict[language]['nav-girls']}
        </h1>
        <Intro
          lang={lang}
          bossName={dict[language]['boss-name']}
          bossQuote={dict[language]['boss-quote']}
        />
        <WallopSlides />
      </div>
    );
  }
}

const GirlCard = props => {
  const { snapshot, avatar, name, content, url } = props;
  return (
    <div class="columns">
      <div class="column is-half">
        <figure class="image">
          <img src={snapshot} />
        </figure>
      </div>
      <div class="column info">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48 avatar">
                  <img src={avatar} alt="Image" />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">
                  {name}
                  <a target="_blank" href={url}>
                    <span class="icon">
                      <i class="fa fa-weibo" />
                    </span>
                  </a>
                </p>
                <div class="content">
                  {content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WallopSlides = () => {
  return (
    <div class="Wallop Wallop--slide" id="girlWallop">
      <div class="Wallop-list">
        {Array.from(girls, girl =>
          <div class="Wallop-item" key={girl.id}>
            <GirlCard
              snapshot={girl.snapshot}
              avatar={girl.avatar}
              name={girl.name[language]}
              content={girl.content[language]}
              url={girl.url}
            />
          </div>
        )}
      </div>
      <button class="Wallop-buttonPrevious button is-primary" />
      <button class="Wallop-buttonNext button is-primary" />
    </div>
  );
};

export default GirlsSection;
