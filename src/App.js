import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";

import "./styles/global.scss";

// Header
import Header from "./components/Header/Header";

// Routes
import Routes from "./routes";

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Header />
      <Routes />
    </Fragment>
  </BrowserRouter>
);

export default App;
