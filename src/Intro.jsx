import React from 'react';
import classNames from 'classnames';

const Intro = props => {
  let { bossName, bossQuote, lang } = props;
  let fontName2 = lang === 'en' || lang === 'ko' ? 'font-english' : 'font-tang';
  return (
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img src="/images/faq-section/service_miyabi.jpg" alt="Image" />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p class={classNames('title', 'is-5', fontName2)}>
              <strong>
                {bossName}
              </strong>
              <br />
              {bossQuote}
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a
                class="level-item"
                target="_blank"
                href="http://weibo.com/mymiyabi"
              >
                <span class="icon is-small">
                  <i class="fa fa-weibo" />
                </span>
              </a>
              <a class="level-item" href="#footer">
                <span class="icon is-small">
                  <i class="fa fa-weixin" />
                </span>
              </a>
              <a
                class="level-item"
                target="_blank"
                href="https://www.facebook.com/miyabinokimono"
              >
                <span class="icon is-small">
                  <i class="fa fa-facebook-official" />
                </span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
  );
};

export default Intro;
