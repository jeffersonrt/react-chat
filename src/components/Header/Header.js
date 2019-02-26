import React from "react";
import { Link, withRouter } from "react-router-dom";

const Header = props => {
  // console.log(props);

  return (
    <header>
      <Link to="/">Chat</Link>
      <Link to="/settings">Settings</Link>
    </header>
  );
};

export default withRouter(Header);
