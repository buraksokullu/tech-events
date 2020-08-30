/** Dependencies */
import React, { Suspense, Component } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Home from 'App/views/Home/Home';

class RootRouter extends Component {
  renderHomeComponent = props => {
    return <Home {...props} />;
  };

  redirectHomeComponent = () => {
    return <Redirect to="/" />;
  };

  render() {
    return (
      <Suspense fallback={<div />}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={this.renderHomeComponent} />
            <Route render={this.redirectHomeComponent} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    );
  }
}

export default RootRouter;
