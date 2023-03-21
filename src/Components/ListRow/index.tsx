import Product from '../Product';
import styles from './TitleRow.module.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SecondaryButton from '../Buttons/SecondaryButton';
import DangerButton from '../Buttons/DangerButton';
import { AiOutlineArrowDown } from 'react-icons/ai'

interface Shoplists {
  id: string
  name: string,
  description: string,
  products: []
}

export default function ListRow(){

  const [shoplists, setShoplists] = useState<Array<Shoplists>>([]);

  const getShopLists = async () => {
    try {
      const response = await axios.get("https://localhost:7272/shoplist");
      
      const shoplistsResponse: {shoplists: Array<Shoplists>} = response.data;
      setShoplists(shoplistsResponse.shoplists.reverse());
    } catch (error) { 
      console.log(error)
    }
  }

  const deleteShoplist = async (id: string) => {
    try{
      await axios.delete(`https://localhost:7272/shoplist/${id}`);
      setShoplists(shoplists);
    } catch (error) { 
      console.log(error)
    }
  }

  useEffect(() => {
    getShopLists();
  }, []);

  useEffect(() => {
    getShopLists();
  }, [shoplists]);

  return(
      <section>
        <ul className={styles.list}>
          {shoplists.length === 0 ? <p>Carregando listas</p> :
          shoplists.map((list) => (
            <li key={list.id} className={styles.rowWrapper}>
              <div className={styles.listHeader}>
                <div className={styles.listHeaderText}>
                  <h2>{list.name} ({list.products.length} itens)</h2>
                  <p>{list.description}</p>
                </div>
                <div className={styles.listOptionsWrapper}>
                  <SecondaryButton onClick={() => {}} text="Editar lista" visible={true}/>
                  <DangerButton onClick={() => deleteShoplist(list.id)} text="Deletar lista" visible={true}/>
                </div>
              </div>
              {/* <ul className={styles.listProducts}>
                {list.products.map((product, index) => (
                  <Product key={index} product={product}></Product>
                  ))}
                </ul> */}
              <div className={styles.showMoreWrapper}>
                <p>Ver lista completa</p>
                <AiOutlineArrowDown />
              </div>
            </li>
          ))}
        </ul>
      </section>


  )
}