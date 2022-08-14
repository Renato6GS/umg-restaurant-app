import Link from 'next/link';

import styles from './styles.module.css';

export default function Header({ showCenterMenu = false }) {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <a className={styles.logo}>
          <img src='/pizzafast.svg' width={32} alt={'PizzaFast Logo'} />
          <h1 className={styles.title}>PizzaFast</h1>
        </a>
      </Link>
      {showCenterMenu && (
        <nav className={styles.nav}>
          <Link href={'#offers'}>
            <a className={styles.navLinks}>Ofertas</a>
          </Link>
          <Link href={'#menu-pizafast'}>
            <a className={styles.navLinks}>Menú</a>
          </Link>
        </nav>
      )}
      <Link href={'/showCar'}>
        <a className={styles.partner}>Ver carrito</a>
      </Link>
    </header>
  );
}
