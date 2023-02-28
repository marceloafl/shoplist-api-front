import styles from './TitleRow.module.scss';

export default function TitleRow(){

  const listas = ["Lista 1", "Lista 2", "Lista 3", "Lista 4"]

  return(
      <section>
        <ul className={styles.list}>
          {listas.map(lista => (
            <li className={styles.rowWrapper}>
              <p>{lista}</p>
            </li>
          ))}
        </ul>
      </section>


  )
}