import React from "react";
import { Switch, Route } from "react-router-dom";

// PAGES
import Chat from "./pages/Chat/Chat";
import Settings from "./pages/Settings/Settings";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Chat} />
    <Route path="/settings" component={Settings} />
  </Switch>
);

export default Routes;
