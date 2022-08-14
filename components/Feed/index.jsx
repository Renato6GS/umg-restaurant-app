import Link from 'next/link';
import styles from './styles.module.css';

export default function Feed() {
  return (
    <section className={styles.content}>
      <div className={styles.imageContainer}>
        <Link href={'/detail/MEAT_3'}>
          <img className={styles.img} src='/pizzafast.jpg' alt='' />
        </Link>
      </div>
    </section>
  );
}
