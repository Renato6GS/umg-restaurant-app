import Menu from 'components/Menu';
import Gallery from 'components/Gallery';
import Header from 'components/Header';

import styles from './styles.module.css';
import Footer from 'components/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - UMG^REST</title>
        <meta name='description' content='El mejor restaurante de alta gama en el país de Guatemala.' />
      </Head>

      <header className={styles.header}>
        <Header link='Ver menú' href='#menu' />
        <Gallery />
      </header>

      <main className={styles.main} id='menu'>
        <Menu />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  );
}
