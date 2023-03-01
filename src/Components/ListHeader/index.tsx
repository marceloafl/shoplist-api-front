import styles from './PageTitle.module.scss';

export default function PageTitle(){

  return(
    <div className={styles.wrapper}>
      <div className={styles.pageTitleWrapper}>
        <h1 className={styles.pageTitle}>Listas de Compras</h1>
      </div>
      <div className={styles.optionsWrapper}>
      <button className={styles.newProductButton}>Novo produto</button>
      <button className={styles.newListButton}>Nova lista</button>
      </div>
    </div>
  )
}