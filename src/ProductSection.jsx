import React from 'react';
import ShowCards from './ProductSection/ShowCards';
import Pages from './ProductSection/Pages';
import Filter from './ProductSection/Filter';
import Sort from './ProductSection/Sort';
import cards from './ProductSection/cards';
import dict from './dict.json';
import classNames from 'classnames';
var $ = require('jquery');

var lastLang;
var language;
var text;
const allCards = cards;
const cardsPerPage = 6;

class ProductSection extends React.Component {
  constructor(props) {
    super();
    this.state = {
      pageIndex: 0,
      cards: cards,
      filters: {}
    };
    language = props.lang;
    lastLang = language;
  }

  componentDidUpdate() {
    if (typeof document !== 'undefined') {
      if (language === lastLang) {
        document.getElementById('product-section').scrollIntoView();
      }
      lastLang = language;
    }
  }

  toggleListener() {
    $('html').toggleClass('filter-open');
  }

  pageClickListener(pageNum, event) {
    this.setState({
      pageIndex: pageNum
    });
  }

  sortClickListener(event) {
    let sortFunc;
    if (event.target.value === text['sort3']) {
      sortFunc = (a, b) => parseInt(b.price) - parseInt(a.price);
    } else if (event.target.value === text['sort2']) {
      sortFunc = (a, b) => parseInt(a.price) - parseInt(b.price);
    } else {
      sortFunc = (a, b) => parseInt(b.popularity) - parseInt(a.popularity);
    }
    let newCards = Array.from(this.state.cards);
    newCards.sort(sortFunc);
    this.setState({
      cards: newCards,
      pageIndex: 0
    });
  }

  filterClickListener(fieldName, fieldVal, event) {
    let newFilters = this.state.filters;
    if (event.target.checked) {
      if (fieldName in newFilters) {
        if (!(fieldVal in newFilters[fieldName])) {
          newFilters[fieldName].push(fieldVal);
        }
      } else {
        newFilters[fieldName] = [fieldVal];
      }
    } else {
      let newVals = newFilters[fieldName].filter(val => val !== fieldVal);
      newFilters[fieldName] = newVals;
    }
    let newCards = allCards.filter(card => {
      for (let fieldName in newFilters) {
        let fieldVals = newFilters[fieldName];
        for (let fieldVal of fieldVals) {
          if (card[language][fieldName] !== fieldVal) {
            return false;
          }
        }
      }
      return true;
    });

    this.setState({
      pageIndex: 0,
      filters: newFilters,
      cards: newCards
    });
  }

  render() {
    const { lang } = this.props;
    text = dict[lang];
    language = lang;
    let fontName2 =
      lang === 'en' || lang === 'ko' ? 'font-english' : 'font-tang';

    let pageNum = Math.floor((this.state.cards.length - 1) / cardsPerPage) + 1;
    return (
      <section class="product-section section container" id="product-section">
        <h1 class={classNames('title', 'has-text-centered', 'is-2', fontName2)}>
          {dict[language]['nav-combo']}
        </h1>
        <div class="columns">
          <div class="filter column is-one-fifth">
            <Filter
              cards={this.state.cards}
              filterClick={this.filterClickListener.bind(this)}
              toggleListener={this.toggleListener}
              lang={lang}
            />
          </div>
          <div class="product column">
            <Sort
              sortClickListener={this.sortClickListener.bind(this)}
              toggleListener={this.toggleListener}
              lang={lang}
            />
            <ShowCards
              cards={this.state.cards}
              pageIndex={this.state.pageIndex}
              cardsPerPage={cardsPerPage}
              lang={language}
            />
            <Pages
              pageIndex={this.state.pageIndex}
              pageNum={pageNum}
              pageClickListener={this.pageClickListener.bind(this)}
              prev={dict[language]['prev']}
              next={dict[language]['next']}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default ProductSection;
