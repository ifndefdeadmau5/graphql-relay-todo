import React from 'react';
import Relay from 'react-relay';
import { Router, Route, browserHistory, applyRouterMiddleware, Link } from 'react-router';
import useRelay from 'react-router-relay';
import styles from './App.css';
import Header from '../Header';
import TodoContainer from '../TodoContainer';
import Footer from '../Footer';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('https://api.graph.cool/relay/v1/cj0p6xqc5hmb7011883zf8qvb'),
);

const ViewerQueries = { viewer: () => Relay.QL`query { viewer }` };

const App = () => (
  <Router
    forceFetch
    environment={Relay.Store}
    render={applyRouterMiddleware(useRelay)}
    history={browserHistory}
  >
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <Route
          path="(/:property)"
          component={TodoContainer}
          queries={ViewerQueries}
        />
        <ul>
          <li><Link to={'/all'}>all</Link></li>
          <li><Link to={'/active'}>active</Link></li>
          <li><Link to={'/completed'}>completed</Link></li>
        </ul>
        <Footer />
      </div>
    </div>
  </Router>
);

export default App;
