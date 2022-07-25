import styles from './styles.module.css';
import { MENU } from 'constants/MENU';
import ArticleMenu from 'components/ArticleMenu';

export default function Menu() {
  return (
    <div className={styles.menu}>
      <h3 className={styles.menuTitle}>Menú</h3>
      <section className={styles.book}>
        <div className={styles.leftBook}>
          <ArticleMenu titleSection={'APERITIVOS'} data={MENU} />
          <ArticleMenu titleSection={'PRINCIPALES'} data={MENU} />
        </div>
        <div className={styles.rightBook}>
          <ArticleMenu titleSection={'ENSALADAS'} data={MENU} />
          <ArticleMenu titleSection={'BEBIDAS'} data={MENU} />
          <ArticleMenu titleSection={'POSTRES'} data={MENU} />
        </div>
      </section>
    </div>
  );
}
