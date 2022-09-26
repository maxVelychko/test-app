import React from 'react';

import styles from './App.module.css';

const App = () => {
  return (
    <>
      <header className={styles.header}>
        <h3>The header</h3>
      </header>
      <main className={styles.mainContent}>
        The main content
      </main>
    </>
  );
}

export default App;
