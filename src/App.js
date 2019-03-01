import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles/global.scss';

// Header
import Header from './components/Header/Header';

// Routes
import Routes from './routes';

const App = props => (
  <BrowserRouter>
    <div id="app-wrapper" className={`theme--${props.settings.theme}`}>
      <Header />
      <Routes />
    </div>
  </BrowserRouter>
);

const mapStateToProps = state => ({
  settings: state.settings
});

export default connect(mapStateToProps)(App);
