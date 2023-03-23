import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './FullListRow.module.scss';
import DangerButton from '../Buttons/DangerButton';
import SecondaryButton from '../Buttons/SecondaryButton';
import Product from '../Product';
import IShoplist from '../../types/IShoplist';
import ListHeader from '../ListHeader';

export default function FullListRow(){
  const [shoplistById, setShoplistById] = useState<IShoplist>();  
  const { id } = useParams();
  
    const getShopListsById = async () => {
      try {
        const response = await axios.get(`https://localhost:7272/shoplist/${id}`);
        
        const shoplistsResponse: {shoplists: Array<IShoplist>} = response.data;
        setShoplistById(shoplistsResponse.shoplists[0]);
      } catch (error) { 
        console.log(error)
      }
    }
   
    useEffect(() => {
      getShopListsById();
    }, [])

  return(
    <section>
      <ul>
        <li className={styles.rowWrapper}>
          {shoplistById != null
          ? <ListHeader shoplist={shoplistById} editAllowed={true} />
          : <p>Carregando lista</p>
          }
          <ul className={styles.list}>
            {shoplistById?.products == null
            ? <p>Lista vazia</p>
            : shoplistById.products.map((product, index) => (
              <Product key={index} product={product}></Product>          
              ))}
          </ul>
        </li>
      </ul>
    </section>
  )
}