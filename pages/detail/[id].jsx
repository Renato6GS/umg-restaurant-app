import Footer from 'components/Footer';
import Header from 'components/Header';
import { MENU } from 'constants/MENU';
import Head from 'next/head';

import styles from './styles.module.css';

export default function Detail({ results }) {
  const [group, idGroup] = results;
  const { id, title, price, desc, image } = MENU[group][idGroup];

  const handleClick = () => {
    const key = `${group}_${id}`;
    const keys = Object.keys(localStorage);
    let i = keys.length;
    let obj = {};
    let found = false;
    loop: while (i--) {
      const item = JSON.parse(localStorage.getItem(keys[i]));
      if (item.id === id && item.group === group) {
        obj = item;
        found = true;
        break loop;
      }
    }
    if (!found) {
      obj = { group, id, quantity: 1 };
    } else {
      obj.quantity += 1;
    }
    localStorage.setItem(key, JSON.stringify(obj));
    alert('Se ha agregado a tu carrito');
  };

  return (
    <>
      <Head>
        <title>{title} - PizzaFast</title>
        <meta name='description' content='El mejor restaurante de alta gama en el país de Guatemala.' />
      </Head>

      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <div className={styles.resultContainer}>
          <img src={image} alt={title} className={styles.img} />
          <article className={styles.article}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.desc}>{desc}</p>
            <p className={styles.price}>Q. {price}</p>
            <button className={styles.btnComprar} onClick={handleClick}>
              Comprar
            </button>
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
