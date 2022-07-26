import Footer from 'components/Footer';
import Header from 'components/Header';
import { MENU } from 'constants/MENU';
import Head from 'next/head';

import styles from './styles.module.css';

export default function Detail({ results }) {
  const [group, idGroup] = results;
  const { title, price, desc, img } = MENU[group][idGroup];

  return (
    <>
      <Head>
        <title>{title} - UMG^REST</title>
        <meta name='description' content='El mejor restaurante de alta gama en el país de Guatemala.' />
      </Head>

      <header className={styles.header}>
        <Header link='Regresar' href='/#menu' />
      </header>
      <main className={styles.main}>
        <div className={styles.resultContainer}>
          <img src={img} alt={title} className={styles.img} />
          <article className={styles.article}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.desc}>{desc}</p>
            <p className={styles.price}>{price}</p>
            <button className={styles.btnComprar}>Comprar</button>
          </article>
        </div>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const group = id.slice(0, id.indexOf('_'));
  const idGroup = id.slice(id.indexOf('_') + 1) - 1;
  const results = [group, idGroup];

  return {
    props: {
      results,
    },
  };
}
