import styles from './styles.module.css';
import Link from 'next/link';

export default function SectionMenu({ titleSection, data = [] }) {
  return (
    <article className={styles.content}>
      <header className={styles.headerContent}>
        <div className={styles.rectangleLeft}></div>
        <h4 className={styles.titleOption}>{titleSection}</h4>
        <div className={styles.rectangleRight}></div>
      </header>
      <ul className={styles.ul}>
        {data[titleSection].map(({ id, title, price }) => {
          const KEY = `${titleSection}-${id}`;
          return (
            <li key={KEY} className={styles.li}>
              <Link href={KEY}>
                <a className={styles.option}>
                  {title}
                  <span className={styles.price}>{price}</span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
