import React from 'react';
import styles from './App.css';
import Header from '../Header/Header.jsx';
import TodoContainer from '../TodoContainer/TodoContainer.jsx';
import Footer from '../Footer/Footer.jsx';


const App = () => (
  <div className={styles.app}>
    <Header />
    <TodoContainer />
    <Footer />
  </div>
);

export default App;
