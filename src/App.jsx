import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage/BookingPage';
import NoMatch from './NoMatch';

class App extends React.Component {
  constructor() {
    super();
    var language = window.navigator.userLanguage || window.navigator.language;
    // en-us
    // ja
    // ko
    // zh
    // zh-tw
    // zh-cn
    // zh-hk
    console.log(language); //works IE/SAFARI/CHROME/FF
    const initLang = (lang => {
      if (lang.startsWith('zh')) {
        if (lang === 'zh' || lang.toLowerCase() === 'zh-cn') {
          return 'zh-cn';
        } else {
          return 'zh-tw';
        }
      } else if (lang.startsWith('ja')) {
        return 'ja';
      } else if (lang.startsWith('ko')) {
        return 'ko';
      } else {
        return 'en';
      }
    })(language);

    this.state = {
      lang: initLang
    };
    this.onLangChange = this.onLangChange.bind(this);
  }

  onLangChange(event) {
    let language = event.target.value;
    // TODO: to be implemented , setState(lang)
    if (language === '简体中文') {
      this.setState({
        lang: 'zh-cn'
      });
    } else if (language === '正體中文') {
      this.setState({
        lang: 'zh-tw'
      });
    } else if (language === 'English') {
      this.setState({
        lang: 'en'
      });
    } else if (language === '日本語') {
      this.setState({
        lang: 'ja'
      });
    } else {
      this.setState({
        lang: 'ko'
      });
    }
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={props =>
              <HomePage
                {...props}
                lang={this.state.lang}
                onLangChange={this.onLangChange}
              />}
          />
          <Route
            path="/booking"
            render={props => <BookingPage {...props} lang={this.state.lang} />}
          />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
