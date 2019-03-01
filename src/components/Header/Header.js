import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

import './Header.scss';

const Header = props => {
  const { counter } = props.notification;
  const tagCounter = counter > 0 ? 'active' : 'disable';
  return (
    <header className="main-menu">
      <NavLink exact className="menu-chat" activeClassName="menu-active" to="/">
        Chat
        <span className={`counter-${tagCounter}`}>{counter}</span>
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

const mapStateToProps = state => ({
  notification: state.notification
});

export default withRouter(connect(mapStateToProps)(Header));
