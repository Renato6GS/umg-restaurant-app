import Menu from 'components/Menu';
import Feed from 'components/Feed';
import Header from 'components/Header';

import styles from './styles.module.css';
import Footer from 'components/Footer';
import Head from 'next/head';
import Offers from 'components/Offers';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - PizzaFast</title>
        <meta name='description' content='El mejor restaurante de pizzas en Guatemala.' />
      </Head>

      <header className={styles.header}>
        <Header showCenterMenu />
        <Feed />
      </header>

      <main className={styles.main} id='menu'>
        <Offers />
        <Menu />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  );
}
