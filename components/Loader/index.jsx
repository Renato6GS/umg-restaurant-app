import styles from './styles.module.css';

export default function Loader() {
  return (
    <div className={styles.loadingContainer}>
      <span className={styles.loader}></span>
      <span className={styles.label}>Cargando...</span>
    </div>
  );
}
