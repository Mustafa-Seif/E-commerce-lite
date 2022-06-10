import React from 'react'
import Image from 'next/image'
import styles from '../styles/Porducts.module.css'
import Link from 'next/link'



const Products = ({ products }) => {
    const { id, title, price, image } = products
    return (
        <div className={styles.porducts} key={id}>
            <div>
                <Image src={image} width='200px' height='200px' alt='img'/>
            </div>
            <div>
                <ul>
                    <li>{title}</li>
                    <li >{price}$</li>
                </ul>
            </div>
            <Link href={`/product/${id}`} ><a className={styles.details}>More details</a></Link>
        </div>
    )
}

export default Products