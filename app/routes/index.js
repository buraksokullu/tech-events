/** Dependencies */
import React, { Suspense, Component } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Dashboard from 'App/views/Dashboard/Dashboard';

class RootRouter extends Component {
  renderDashboardComponent = props => {
    return <Dashboard {...props} />;
  };

  redirectDashboardComponent = () => {
    return <Redirect to="/" />;
  };

  render() {
    return (
      <Suspense fallback={<div />}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={this.renderDashboardComponent} />
            <Route render={this.redirectDashboardComponent} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    );
  }
}

export default RootRouter;
