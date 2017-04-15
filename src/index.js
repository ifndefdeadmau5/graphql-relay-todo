import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppContainer } from 'react-hot-loader';
import ViewerRoute from './routes/ViewerRoute';

// AppContainer is a necessary wrapper component for HMR

import App from './components/App';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('https://api.graph.cool/relay/v1/cj0p6xqc5hmb7011883zf8qvb'),
);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <MuiThemeProvider>
        <Relay.Renderer
          Container={Component}
          environment={Relay.Store}
          queryConfig={new ViewerRoute()}
          render={({ done, error, props, retry, stale }) => {
            if (error) {
              return <div>error...</div>;
            } else if (props) {
              return <Component {...props} />;
            }

            return <div>loading...</div>;
          }}
        />
      </MuiThemeProvider>
    </AppContainer>
    ,
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
