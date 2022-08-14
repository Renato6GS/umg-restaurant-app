import Card from 'components/Card';
import styles from './styles.module.css';

import { MENU } from 'constants/MENU';

export default function Menu() {
  return (
    <section id='menu-pizafast' className={styles.menuContainer}>
      <h2 className={styles.title}>Menú</h2>
      <section>
        <h3 className={styles.subTitle}>Pizzas de carne</h3>
        <div className={styles.listOfItems}>
          {MENU['MEAT'].map(({ id, title, price, image }) => {
            return <Card key={id} type={'MEAT'} id={id} title={title} price={price} image={image} />;
          })}
        </div>
      </section>
      <section>
        <h3 className={styles.subTitle}>Pizzas vegetarianas</h3>
        <div className={styles.listOfItems}>
          {MENU['VEGETABLE'].map(({ id, title, price, image }) => {
            return <Card key={id} type={'VEGETABLE'} id={id} title={title} price={price} image={image} />;
          })}
        </div>
      </section>
      <section>
        <h3 className={styles.subTitle}>Bebidas</h3>
        <div className={styles.listOfItems}>
          {MENU['BEVERAGES'].map(({ id, title, price, image }) => {
            return <Card key={id} type={'BEVERAGES'} id={id} title={title} price={price} image={image} />;
          })}
        </div>
      </section>
    </section>
  );
}
