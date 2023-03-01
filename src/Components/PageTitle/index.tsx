import styles from './PageTitle.module.scss';

export default function PageTitle(){

  return(
    <div className={styles.wrapper}>
      <div className={styles.pageTitleWrapper}>
        <h1 className={styles.pageTitle}>Listas de Compras</h1>
      </div>
      <div className={styles.optionsWrapper}>
        <button className={styles.newListButton}>Criar nova lista</button>
      </div>
    </div>
  )
}