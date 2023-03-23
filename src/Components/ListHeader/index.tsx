import axios from 'axios';
import IShoplist from '../../types/IShoplist';
import DangerButton from '../Buttons/DangerButton';
import SecondaryButton from '../Buttons/SecondaryButton';
import styles from './ListHeader.module.scss';

export default function ListHeader(props: {shoplist: IShoplist, editAllowed: boolean}){

      const deleteShoplist = async (id: string) => {
      try{
        await axios.delete(`https://localhost:7272/shoplist/${id}`);
        // setShoplists(shoplists);
      } catch (error) { 
        console.log(error)
      }
    }

  return(
    <div className={styles.listHeader}>
      <div className={styles.listHeaderText}>
        <h2>{props.shoplist.name} ({props.shoplist.products.length} itens)</h2>
        <p>{props.shoplist.description}</p>
      </div>
      {props.editAllowed
        ? <div>
            <SecondaryButton onClick={() => {}} text="Editar lista" visible={true}/>
            <DangerButton onClick={() => deleteShoplist(props.shoplist.id)} text="Deletar lista" visible={true}/>
          </div>
        : ''
        }
    </div>
  )
}