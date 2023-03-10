import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Newlist.module.scss';
import { GrClose } from 'react-icons/gr';
import { handleModal } from '../store/reducers/newShoplistOpened';
import PrimaryButton from '../Button';
import axios from 'axios';

interface RootState {
  newShoplistOpened: boolean
}

export default function Newlist(){

  const newShoplistOpened = useSelector((state: RootState) => state.newShoplistOpened)
  const [listName, setListName] = useState<string>();
  const [listDescription, setListDescription] = useState<string>();
  const [visibleSucess, setVisibleSucess] = useState<boolean>(false);

  function getListName(value: string){
    setListName(value);
  }

  function getListDescription(value: string){
    setListDescription(value);
  }

  const dispatch = useDispatch();

  function closeNewlist(){
    dispatch(handleModal());
  }

  function Post (){
    try {
      const response = axios.post("https://localhost:7272/shoplist", {
        "name": listName,
        "description": listDescription,
        "products": []
      })
      .then(() => handleSucessMessage())
    } catch (error) {
      console.error(error);
    }
  }

  function handleSucessMessage(){
    setVisibleSucess(true);
    setTimeout(() => {
      setVisibleSucess(false);
    }, 3000);
  }

  return(
    <section className={newShoplistOpened ? `${styles.modalWrapper}` : `${styles.inactive}`}>
      <div className={styles.modalHeaderWrapper}>
        <h4>Insira os dados da nova lista</h4>
        <GrClose className={styles.inputCloseIcon} onClick={closeNewlist}></GrClose>
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="name">Nome da lista</label>
        <input type="text" name="name" onChange={event => getListName(event.target.value)}/>
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="description">Descrição da lista</label>
        <input type="text" name="description" onChange={event => getListDescription(event.target.value)}/>
      </div>
      <PrimaryButton text={"Adicionar lista"} onClick={() => Post()}/>
      <div className={visibleSucess ? `${styles.sucessMessageWrapper}` : `${styles.inactive}`}>
        <p>Lista criada com sucesso.</p>
      </div>
    </section>
  )
}