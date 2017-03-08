import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import App from './components/App/App.js';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <MuiThemeProvider>
        <Component />
      </MuiThemeProvider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept(App, () => {
    render(App);
  });
}
