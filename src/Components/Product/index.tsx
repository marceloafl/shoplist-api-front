import styles from './Product.module.scss';
import { FaTrash } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Props {
  product: {
    id: number
    name: string
    brand: string
    description: string
    number: number
  }
}

export default function Product({product}: Props){
  return(
      <section>
        <ul className={styles.productList}>
            <li className={styles.productWrapper}>
              <div className={styles.productInfo}>
                <h3>{product.name}</h3>
                <p>Marca: {product.brand}</p>
                <p>Descrição: {product.description}</p>
                <p>Quantidade: {product.number}</p>
              </div>
              <FaTrash />
            </li>
        </ul>
      </section>
  )
}