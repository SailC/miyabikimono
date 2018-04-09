// import createBrowserHistory from 'history/createBrowserHistory'
// import createMemoryHistory from 'history/createMemoryHistory'
//
// export default process.env.BROWSER ? createBrowserHistory() : createMemoryHistory()
let history;

if (typeof document !== 'undefined') {
  const createBrowserHistory = require('history/createBrowserHistory').default;

  history = createBrowserHistory();
}

export default history;
