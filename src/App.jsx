import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage/BookingPage';
import NoMatch from './NoMatch';

class App extends React.Component {
  constructor(props) {
    let language;
    if (window.navigator)
      language = window.navigator.userLanguage || window.navigator.language;
    else language = 'en-us';
    let codeMap = new Map([
      ['zh-cn', 'zh-cn'],
      ['zh-tw', 'zh-tw'],
      ['zh-hk', 'zh-tw'],
      ['zh-sg', 'zh-tw'],
      ['en-us', 'en'],
      ['ko', 'ko'],
      ['ko-kp', 'ko'],
      ['ko-kr', 'ko'],
      ['ja', 'ja']
    ]);

    // console.log(language.toLowerCase());
    // console.log(codeMap);

    let code = codeMap.get(language.toLowerCase()) || 'en';
    // console.log(code);

    super();

    this.state = {
      lang: code
    };
    this.onLangChange = this.onLangChange.bind(this);
  }

  componentWillMount() {}

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
    try {
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
              render={props =>
                <BookingPage {...props} lang={this.state.lang} />}
            />
            <Route component={NoMatch} />
          </Switch>
        </div>
      );
    } catch (e) {
      console.log(e);
    }
  }
}

export default App;
