import Link from 'next/link';

import styles from './styles.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <Link href='/'>
        <a className={styles.logo}>PizzaFast</a>
      </Link>
      <div className={styles.socialMediaContainer}>
        <h5 className={styles.follow}>Síguenos</h5>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a href='https://github.com/Renato6GS/umg-restaurant-app' className={styles.a}>
              <img className={styles.image} src='/icons/facebook.svg' alt='Facebook' />
            </a>
          </li>
          <li className={styles.li}>
            <a href='https://github.com/Renato6GS/umg-restaurant-app' className={styles.a}>
              <img className={styles.image} src='/icons/twitter.svg' alt='twitter' />
            </a>
          </li>
          <li className={styles.li}>
            <a href='https://github.com/Renato6GS/umg-restaurant-app' className={styles.a}>
              <img className={styles.image} src='/icons/instagram.svg' alt='Instagram' />
            </a>
          </li>
          <li className={styles.li}>
            <a href='https://github.com/Renato6GS/umg-restaurant-app' className={styles.a}>
              <img className={styles.image} src='/icons/brand-github.svg' alt='Repositorio del proyecto' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
