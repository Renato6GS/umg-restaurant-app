import Link from 'next/link';
import styles from './styles.module.css';

export default function Gallery() {
  return (
    <div className={styles.content}>
      <h2 className={styles.subtitle}>No necesitas Tenedor Para Una Buena Comida</h2>
      <div className={styles.gallery}>
        <div className={styles.column}>
          <Link href='/detail/ENSALADAS_2'>
            <a>
              <img className={styles.image} src='/img/gallery/ensalada-camaron.jpg' alt='' />
            </a>
          </Link>
        </div>
        <div className={styles.column}>
          <Link href='/detail/PRINCIPALES_3'>
            <a>
              <img className={styles.image} src='/img/gallery/costilla.jpg' alt='' />
            </a>
          </Link>
          <Link href='/detail/ENSALADAS_4'>
            <a>
              <img className={styles.image} src='/img/gallery/ensalada-verde.jpg' alt='' />
            </a>
          </Link>
        </div>
        <div className={styles.column}>
          <Link href='/detail/POSTRES_1'>
            <a>
              <img className={styles.image} src='/img/gallery/milk-shake.jpg' alt='' />
            </a>
          </Link>
        </div>
        <div className={styles.column}>
          <Link href='/detail/PRINCIPALES_7'>
            <a>
              <img className={styles.image} src='/img/gallery/robin.jpg' alt='' />
            </a>
          </Link>
          <Link href='/detail/POSTRES_3'>
            <a>
              <img className={styles.image} src='/img/gallery/pastel-4-capas.jpg' alt='' />
            </a>
          </Link>
        </div>
        <div className={styles.column}>
          <Link href='/detail/ENSALADAS_3'>
            <a>
              <img className={styles.image} src='/img/gallery/ensalada-rusa.jpg' alt='' />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
