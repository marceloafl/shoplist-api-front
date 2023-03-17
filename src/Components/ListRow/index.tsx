import Product from '../Product';
import styles from './TitleRow.module.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

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
      setShoplists(shoplistsResponse.shoplists);
    } catch (error) { 
      console.log(error)
    }
  }

  useEffect(() => {
    getShopLists();
  }, []);

  return(
      <section>
        <ul className={styles.list}>
          {shoplists.length === 0 ? <p>Carregando listas</p> :
          shoplists.map((list) => (
            <li key={list.id} className={styles.rowWrapper}>
              <div className={styles.listHeader}>
                <div className={styles.listHeaderText}>
                  <h2>{list.name}</h2>
                  <p>{list.description}</p>
                </div>
                <div className={styles.listOptionsWrapper}>
                  <button className={styles.editList}>Editar lista</button>
                  <button className={styles.deleteList}>Deletar lista</button>
                </div>
              </div>
              <ul className={styles.listProducts}>
                {list.products.map((product, index) => (
                  <Product key={index} product={product}></Product>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>


  )
}