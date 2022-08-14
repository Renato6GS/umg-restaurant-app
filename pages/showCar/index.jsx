import { useEffect, useState } from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Head from 'next/head';

import { MENU } from 'constants/MENU';
import styles from './styles.module.css';
import Link from 'next/link';

function Car() {
  const [pizzas, setPizzas] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const keys = Object.keys(localStorage);
    let i = keys.length;
    const data = [];
    let total = 0;
    while (i--) {
      const item = JSON.parse(localStorage.getItem(keys[i]));
      if (item.group) {
        data.push(item);
        total += Number(MENU[item.group][item.id - 1].price) * Number(item.quantity);
        console.log(item.price);
        console.log(item.quantity);
      }
    }

    setPizzas(data);
    setTotal(total);
  }, []);

  const handlePay = () => {
    alert('Gracias por preferirnos 😁');
    localStorage.clear();
    setPizzas([]);
  };

  const handleClear = () => {
    localStorage.clear();
    setPizzas([]);
  };

  return (
    <>
      <Head>
        <title>Carrito - PizzaFast</title>
        <meta name='description' content='El mejor restaurante de alta gama en el país de Guatemala.' />
      </Head>

      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <h2 className={styles.title}>Carrito</h2>
        <div className={styles.listContainer}>
          {pizzas.map(({ group, id, quantity }) => {
            const { title, price, desc, image } = MENU[group][id - 1];
            return (
              <Link href={`/detail/${group}_${id}`} key={`${group}_${id}`}>
                <article className={styles.articleContainer}>
                  <img className={styles.articleImg} src={image} alt={title} />
                  <div className={styles.detailsContainer}>
                    <h3 className={styles.titleArticle}>{title}</h3>
                    <p className={styles.desc}>Descripción: {desc}</p>
                    <p className={styles.price}>Q. {price}</p>
                    <p className={styles.quantity}>Cantidad: {quantity}</p>
                  </div>
                </article>
              </Link>
            );
          })}
          <p className={styles.total}>Total: Q. {total}</p>
          <div className={styles.btnContainer}>
            <button className={styles.btnPagar} onClick={handlePay}>
              Pagar
            </button>
            <button className={styles.btnLimpiar} onClick={handleClear}>
              Limpiar Carrito
            </button>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  );
}

export default function showCar() {
  // const [pizzas, setPizzas] = useState(initialState);

  // useEffect(() => {
  //   const keys = Object.keys(localStorage);
  //   let i = keys.length;
  //   const data = [];
  //   while (i--) {
  //     const item = JSON.parse(localStorage.getItem(keys[i]));
  //     data.push(item);
  //   }

  //   console.log(data);
  //   console.log(typeof data);
  //   console.log(data instanceof Array);
  // }, []);

  // return (
  //   <>
  //     <Head>
  //       <title>Carrito - PizzaFast</title>
  //       <meta name='description' content='El mejor restaurante de alta gama en el país de Guatemala.' />
  //     </Head>

  //     <header className={styles.header}>
  //       <Header />
  //     </header>
  //     <main className={styles.main}>
  //       <h2>Carrito: </h2>
  //       <div className={styles.listContainer}>{pizzas}</div>
  //     </main>
  //     <footer className={styles.footer}>
  //       <Footer />
  //     </footer>
  //   </>
  // );
  return <Car />;
}
