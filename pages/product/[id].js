import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const singleproduct = ({product}) => {
  return (
    <div className='main-single-pro'>
      <div><Image src={product.image} width='200px' height='200px' /></div>
      <ul>
        <li>Title : {product.title}</li>
        <li>Price : {product.price}</li>
        <li>Rate  : {product.rating.rate}</li>
        <li>Count : {product.rating.count}</li>
        <Link href='/'><a>continue</a></Link>
      </ul>
      
        
     
    </div>
  )
}

export default singleproduct


export async function getStaticPaths() {
    const req = await fetch('https://fakestoreapi.com/products')
    const products = await req.json()
    const paths = products.map((product)=>{
        return{
            params:{id:product.id.toString()}
        }
    })
    return{
        paths,
        fallback:false

    }
}

export async function getStaticProps(context) {
    const req = await fetch(`https://fakestoreapi.com/products/${context.params.id} ` )
    const product = await req.json()
    return{
        props : {product}
      }


}
