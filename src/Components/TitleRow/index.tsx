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

export default function TitleRow(){

  const [shoplists, setShoplists] = useState<Array<Shoplists>>([]);

  const getShopLists = async () => {
    try {
      const response = await axios.get("https://localhost:7272/shoplist")
      
      const shoplistsResponse = response.data;
      setShoplists(shoplistsResponse);
    } catch (error) { 
      console.log(error)
    }
  }

  useEffect(() => {
    getShopLists();
  }, [])

  const opened = true;

  return(
      <section>
        <ul className={styles.list}>
          {shoplists.length === 0 ? <p>Carregando listas</p> :
          shoplists.map((list) => (
            <li key={list.id} className={styles.rowWrapper}>
              <div>
                <h2>{list.name}</h2>
                <p>{list.description}</p>
                <div>
                  {list.products.map((product, index) => (
                    <Product key={index} product={product}></Product>
                    ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>


  )
}