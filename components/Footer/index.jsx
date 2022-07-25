import Link from 'next/link';

import styles from './styles.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <Link href='/'>
        <a className={styles.logo}>UMG^REST</a>
      </Link>
      <div className={styles.socialMediaContainer}>
        <h5 className={styles.follow}>Síguenos</h5>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a href='#' className={styles.a}>
              <img className={styles.image} src='/icons/facebook.svg' alt='Facebook' />
            </a>
          </li>
          <li className={styles.li}>
            <a href='#' className={styles.a}>
              <img className={styles.image} src='/icons/twitter.svg' alt='twitter' />
            </a>
          </li>
          <li className={styles.li}>
            <a href='#' className={styles.a}>
              <img className={styles.image} src='/icons/instagram.svg' alt='instagram' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
