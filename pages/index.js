import Menu from 'components/Menu';
import Gallery from 'components/Gallery';
import Header from 'components/Header';

import styles from './styles.module.css';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Header link='Ver menú' href='#menu' />
        <Gallery />
      </header>

      <main className={styles.main} id='menu'>
        <Menu />
      </main>

      <footer>sdf</footer>
    </>
  );
}
