import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Newlist.module.scss';
import { GrClose } from 'react-icons/gr';
import { handleModal } from '../store/reducers/newShoplistOpened';

interface RootState {
  newShoplistOpened: boolean
}

export default function Newlist(){

  const newShoplistOpened = useSelector((state: RootState) => state.newShoplistOpened)

  const dispatch = useDispatch();
  function closeNewlist(){
    dispatch(handleModal());
  }

  return(
    <section className={newShoplistOpened ? `${styles.modalWrapper}` : `${styles.modalWrapperInactive}`}>
      <div className={styles.modalHeaderWrapper}>
        <h4>Insira os dados da nova lista</h4>
        <GrClose className={styles.inputCloseIcon} onClick={closeNewlist}></GrClose>
      </div>
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