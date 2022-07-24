import React from 'react';
import Link from 'next/link';

import styles from './styles.module.css';

export default function Header({ href = '/', link = 'nulo' }) {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <a className={styles.logo}>
          <h1 className={styles.title}>UMG^REST</h1>
        </a>
      </Link>
      <Link href={href}>
        <a className={styles.partner}>{link}</a>
      </Link>
    </header>
  );
}
