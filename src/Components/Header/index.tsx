import { handleModal } from '../store/reducers/newShoplistOpened';
import styles from './Header.module.scss';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import PrimaryButton from '../Buttons/PrimaryButton';
import { Link } from 'react-router-dom';

interface RootState {
  newShoplistOpened: boolean
}

export default function Header(){

  const newShoplistVisible = useSelector((state: RootState) => state.newShoplistOpened)

  const dispatch = useDispatch();

  function openModal(){
    dispatch(handleModal());
  }
  
  return(
    <div className={styles.wrapper}>
      <div className={styles.pageTitleWrapper}>
        <Link to={'/'}className={styles.pageMenu}>
          <h1>Suas listas</h1>
        </Link>
      </div>
      <div className={styles.optionsWrapper}>
        <PrimaryButton onClick={openModal} text="Nova lista" visible={!newShoplistVisible}/>
      </div>
    </div>
  )
}