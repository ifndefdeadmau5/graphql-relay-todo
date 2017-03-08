import React from 'react';
import styles from './App.css';
import Header from '../Header/Header';
import TodoContainer from '../TodoContainer/TodoContainer';
import Footer from '../Footer/Footer';


const App = () => (
  <div className={styles.app}>
    <Header />
    <TodoContainer />
    <Footer />
  </div>
);

export default App;
