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
    <li className={styles.productWrapper}>
      <div className={styles.productNumber}>
        <p>Quantidade</p>
        <p>{product.number}</p>
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productTitle}>
          <p>{product.name}</p>
          <p>-</p>
          <p>{product.brand}</p>
        </div>
        <p>Descrição: {product.description}</p>
      </div>
      <div className={styles.productDelete}>
        <FaTrash />
      </div>
    </li>
  )
}