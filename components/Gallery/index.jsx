import React from 'react';

import styles from './styles.module.css';

export default function Gallery() {
  return (
    <div className={styles.content}>
      <h2 className={styles.subtitle}>No necesitas Tenedor Para Una Buena Comida</h2>
      <div className={styles.gallery}>
        <div className={styles.column}>
          <a href='#'>
            <img className={styles.image} src='/img/gallery/ensalada-camaron.jpg' alt='' />
          </a>
        </div>
        <div className={styles.column}>
          <a href='#'>
            <img className={styles.image} src='/img/gallery/costilla.jpg' alt='' />
          </a>
          <a href='#'>
            <img className={styles.image} src='/img/gallery/ensalada-verde.jpg' alt='' />
          </a>
        </div>
        <div className={styles.column}>
          <a href='#'>
            <img className={styles.image} src='/img/gallery/milk-shake.jpg' alt='' />
          </a>
        </div>
        <div className={styles.column}>
          <a href='#'>
            <img className={styles.image} src='/img/gallery/robin.jpg' alt='' />
          </a>
          <a href='#'>
            <img className={styles.image} src='/img/gallery/pastel-3-capas.jpg' alt='' />
          </a>
        </div>
        <div className={styles.column}>
          <a href='#'>
            <img className={styles.image} src='/img/gallery/ensalada-rusa.jpg' alt='' />
          </a>
        </div>
      </div>
    </div>
  );
}
