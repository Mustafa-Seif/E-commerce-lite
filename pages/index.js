import React from 'react'
import Nav from '../components/Nav'
import Products from '../components/Products'


function home({products}) {
  return (
    
      <main className='main'>
          {products.map((Product)=> <Products key={Product.id} products={Product}/> )}
      </main>
  )
}

export default home

export async function getStaticProps() {
  const req = await fetch('https://fakestoreapi.com/products')
  const products = await req.json()
  return{
    props : {products:products}
  }
}