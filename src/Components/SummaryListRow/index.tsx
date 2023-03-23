import Product from '../Product';
import styles from './SummaryListRow.module.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SecondaryButton from '../Buttons/SecondaryButton';
import DangerButton from '../Buttons/DangerButton';
import { Link, useParams } from 'react-router-dom';
import ListButton from '../Buttons/ListButton';
import IShoplist from '../../types/IShoplist';
import ListHeader from '../ListHeader';

export default function SummaryListRow(){

  const [shoplists, setShoplists] = useState<Array<IShoplist>>([]);

  const getShopLists = async () => {
    const summaryAmount = 3;

    try {
      const response = await axios.get(`https://localhost:7272/shoplist/summary/${summaryAmount}`);
      
      const shoplistsResponse: {shoplists: Array<IShoplist>} = response.data;
      setShoplists(shoplistsResponse.shoplists.reverse());
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
              <ListHeader shoplist={list} editAllowed={false} />
              <ul className={styles.listProducts}>
                {list.products.map((product, index) => (
                  <Product key={index} product={product}></Product>
                  ))}
                </ul>
                <ListButton list={list}/>
            </li>
          ))}
        </ul>
      </section>


  )
}