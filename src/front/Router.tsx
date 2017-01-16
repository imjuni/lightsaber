import * as React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { App } from './containers/App';
import { Home } from './containers/Home';
import { User } from './containers/User';

interface IAppRouter {}

class AppRouter extends React.Component<IAppRouter, undefined> {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/user" component={User}/>
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
