import styles from './Newlist.module.scss';

let isActive: boolean = false;

export default function Newlist(){

  return(
    <section className={isActive ? `${styles.modalWrapper}` : `${styles.modalWrapperInactive}`}>
      <h4>Insira os dados da nova lista</h4>
      <div className={styles.inputWrapper}>
        <label htmlFor="name">Nome da lista</label>
        <input type="text" name="name"/>
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="description">Descrição da lista</label>
        <input type="text" name="description"/>
      </div>
      <form className={styles.dropdownWrapper} action="#">
        <label htmlFor="shoplist">Lista de compra</label>
        <select name="shoplist" id="shoplist">
          <option value="lista 1">JavaScript</option>
          <option value="lista 2">PHP</option>
          <option value="lista 3">Java</option>
          <option value="lista 4">Golang</option>
        </select>
      </form>
    </section>
  )
}