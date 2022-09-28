import React from 'react';

import Inhabitants from '../Inhabitants';
import styles from './App.module.css';

const App = () => {
  return (
    <>
      <header className={styles.header}>
        <h3>The web app</h3>
      </header>
      <main className={styles.mainContent}>
        <Inhabitants />
      </main>
    </>
  );
}

export default App;
