import React, { Component } from 'react';
import Relay from 'react-relay';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import styles from './App.css';
import Header from '../Header';
import TodoContainer from '../TodoContainer';
import Footer from '../Footer';


class App extends Component {
  render() {
    return (
        <div className={styles.app}>
          <div className={styles.container}>
            <Header />

            <p>{this.props.viewer.id}</p>

            <Footer />
          </div>
        </div>
    );
  }
}

export default Relay.createContainer(
  App,
  {
    fragments: {
       viewer: () => Relay.QL`
           fragment on Viewer {
               id
           }
       `,
     },
   },
 );
