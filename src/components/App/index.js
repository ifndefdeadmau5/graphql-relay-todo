import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import styles from './App.css';
import Header from '../Header';
import TodoContainer from '../TodoContainer';
import Footer from '../Footer';

const App = () => (
  <Router>
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <Route
          path="/:property"
          component={TodoContainer}
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
