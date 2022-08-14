import Card from 'components/Card';
import { MENU } from 'constants/MENU';

import styles from './styles.module.css';

export default function Offers() {
  return (
    <section id='offers' className={styles.offersContainer}>
      <h2 className={styles.title}>Más Ofertas</h2>
      <div className={styles.listOfOffers}>
        {MENU['OFFERS'].map(({ id, title, price, image }) => {
          return <Card key={id} type={'OFFERS'} id={id} title={title} price={price} image={image} />;
        })}
      </div>
    </section>
  );
}
