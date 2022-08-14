import styles from './styles.module.css';
import Link from 'next/link';

export default function Card({ type, id, title, price, image }) {
  return (
    <Link href={`/detail/${type}_${id}`}>
      <a key={id} className={styles.link}>
        <div className={styles.backgroundImage}>
          <img className={styles.image} src={image} alt={title} />
          <div className={styles.gradientImage}></div>
          <span className={styles.description}>
            {title} <span className={styles.descriptionBlock}>Q. {price}</span>
          </span>
        </div>
      </a>
    </Link>
  );
}
