import React from 'react';
import Gallery from '../components/Gallery';
import Header from '../components/Header';

import styles from './styles.module.css';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Header link='Ver menú' />
        <Gallery />
      </header>

      <main>adsf</main>

      <footer>sdf</footer>
    </>
  );
}
