import { Link } from 'react-router-dom';
import Shoplist from '../../../types/IShoplist';
import styles from './ListButton.module.scss';

export default function ListButton(props: {list?: Shoplist}){
  return (
    <Link to={`/shoplist/${props.list?.id}`} className={styles.showMoreButton}>
      <p>Ver lista completa</p>
    </Link>
  )
}