import React from 'react';
import { Switch, Route } from 'react-router-dom';

// PAGES
import Chat from './pages/Chat/Chat';
import Settings from './pages/Settings/Settings';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Chat} />
    <Route exact path="/settings" component={Settings} />
  </Switch>
);

export default Routes;
