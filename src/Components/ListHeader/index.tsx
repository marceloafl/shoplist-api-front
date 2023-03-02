import { handleModal } from '../store/reducers/newShoplistOpened';
import styles from './PageTitle.module.scss';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

interface RootState {
  newShoplistOpened: boolean
}

export default function PageTitle(){

  const newShoplistOpened = useSelector((state: RootState) => state.newShoplistOpened)

  const dispatch = useDispatch();

  function openModal(){
    dispatch(handleModal());
  }
  
  return(
    <div className={styles.wrapper}>
      <div className={styles.pageTitleWrapper}>
        <h1 className={styles.pageTitle}>Listas de Compras</h1>
      </div>
      <div className={styles.optionsWrapper}>
        <button className={styles.newProductButton}>Novo produto</button>
        <button className={`${newShoplistOpened ? styles.hidden: styles.newListButton}`} onClick={openModal}>Nova lista</button>
      </div>
    </div>
  )
}