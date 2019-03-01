import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import './Header.scss';

const Header = ({ location }) => {
  return (
    <header className="main-menu">
      <NavLink exact className="menu-chat" activeClassName="menu-active" to="/">
        Chat
      </NavLink>
      <NavLink
        exact
        className="menu-settings"
        activeClassName="menu-active"
        to="/settings"
      >
        Settings
      </NavLink>
    </header>
  );
};

export default withRouter(Header);
