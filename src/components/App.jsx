import React from 'react';
import styles from './App.css';
import Header from './Header/Header.jsx'
import TodoList from './TodoList/TodoList.jsx'
import Footer from './Footer/Footer.jsx'


const App = () => (
  <div className={styles.app}>
    <Header />
    <TodoList />
    <Footer />
  </div>
);

export default App;
