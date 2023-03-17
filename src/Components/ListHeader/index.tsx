import { handleModal } from '../store/reducers/newShoplistOpened';
import styles from './PageTitle.module.scss';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import PrimaryButton from '../Button';

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
        <h1 className={styles.pageTitle}>Suas listas</h1>
      </div>
      <div className={styles.optionsWrapper}>
        {/* <PrimaryButton text="Novo produto" /> */}
        <PrimaryButton onClick={openModal} text="Nova lista" />
      </div>
    </div>
  )
}