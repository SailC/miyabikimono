import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage/BookingPage';
import NoMatch from './NoMatch';

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      lang: 'zh-cn'
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
