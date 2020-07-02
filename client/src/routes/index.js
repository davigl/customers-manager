import React from 'react';
import {
  HashRouter, Route, Switch, Redirect
} from 'react-router-dom';

import Dashboard from '~/pages/Dashboard';
import NotFound from '~/pages/NotFound';
import Signin from '~/pages/Signin';
import Signup from '~/pages/Signup';
import { isAuthenticated } from '~/services/auth';

const CheckRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (isAuthenticated() ? (
      <Redirect
        to={{ pathname: '/dashboard', state: { from: props.location } }}
      />
    ) : (
      <Component />
    ))}
  />
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (isAuthenticated() ? (
      <Component />
    ) : (
      <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    ))}
  />
);

const Routes = () => (
  <HashRouter>
    <Switch>
      <CheckRoute exact path="/" component={Signin} />
      <CheckRoute exact path="/signup" component={Signup} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <Route path="*" component={NotFound} />
    </Switch>
  </HashRouter>
);

export default Routes;
