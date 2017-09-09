import React from 'react';
import dict from './dict.json';

const FooterSection = props => {
  const { lang } = props;
  return (
    <div class="section footer-section container" id="footer-section">
      <footer id="footer">
        <ul class="contact-list has-text-centered">
          <li class="email">
            <span class="icon is-small">
              <i class="fa fa-envelope" />
            </span>
            <span>
              {dict[lang]['email-name']}: Service@mymiyabi.com
            </span>
          </li>
          <li class="phone">
            <span class="icon is-small">
              <i class="fa fa-phone" />
            </span>
            <span>
              {dict[lang]['contact-name1']}: 03-6802-3566
            </span>
          </li>
          <li class="phone">
            <span class="icon is-small">
              <i class="fa fa-phone-square" />
            </span>
            <span>
              {dict[lang]['contact-name2']}: 080-3353-7888
            </span>
          </li>
          <li class="phone">
            <span class="icon is-small">
              <i class="fa fa-phone-square" />
            </span>
            <span>客服三号线: 075-551-3280</span>
          </li>
          <li class="address">
            <span class="icon is-small">
              <i class="fa fa-map-marker" />
            </span>
            <span>
              <a href="https://goo.gl/maps/JP86SivD6C82" target="_blank">
                {dict[lang]['location-1']}
              </a>
            </span>
          </li>
          <li class="address">
            <span class="icon is-small">
              <i class="fa fa-location-arrow" />
            </span>
            <span>
              <a href="https://goo.gl/maps/GeNeQvhX5642" target="_blank">
                {dict[lang]['location-2']}
              </a>
            </span>
          </li>
          <li class="address">
            <span class="icon is-small">
              <i class="fa fa-location-arrow" />
            </span>
            <span>
              <a href="https://goo.gl/maps/5ZLyrLM7uCu" target="_blank">
                和装工房--雅（京都1号店）: 京都市下京区稲荷町320番地ケンゾービル 301室
              </a>
            </span>
          </li>
          <li class="address">
            <span class="icon is-small">
              <i class="fa fa-location-arrow" />
            </span>
            <span>
              <a href="https://goo.gl/maps/6TL7bm8eqx82" target="_blank">
                和装工房--樱花（京都2号店）: 京都市東山区鐘鋳町419
              </a>
            </span>
          </li>
        </ul>
        <img src="/images/barcode_tn.jpg" id="barcode" />
        <a href="http://weibo.com/mymiyabi" target="_blank" class="social-icn">
          <img src="/images/icn/ic_sina-weibo.svg" alt="weibo" class="button" />
        </a>
        <a
          href="https://www.facebook.com/miyabinokimono"
          target="_blank"
          class="social-icn"
        >
          <img
            src="/images/icn/ic_facebook.svg"
            alt="facebook"
            class="button"
          />
        </a>
        <a
          href="https://www.instagram.com/tokyo_kimono_miyabi"
          target="_blank"
          class="social-icn"
        >
          <img
            src="/images/icn/ic_instagram.svg"
            alt="instagram"
            class="button"
          />
        </a>
        <a
          href="http://m.dianping.com/appshare/shop/32347442"
          target="_blank"
          class="social-icn"
        >
          <img
            src="/images/icn/ic_dianping.svg"
            alt="dianping"
            class="button"
          />
        </a>
        <a href="#hero-section" class="social-icn">
          <img src="/images/icn/ic_up.svg" alt="dianping" class="button" />
        </a>
      </footer>
    </div>
  );
};

export default FooterSection;
