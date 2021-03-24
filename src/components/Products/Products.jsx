import React from 'react'
import {Grid} from '@material-ui/core'

import Product from './Product/Product'

const products = [
  {id:1, name:'Shoes',description:'Running shoes', price:'$45', image: 'https://cdn.shopify.com/s/files/1/0558/4169/products/Dark_Grey_Runner_1024x683_00001_9295631e-7c28-4da5-a7f8-1a1a5e30101c.jpg?v=1575470887'},
  {id:2, name:'Macbook',description:'Apple Macbook',price:'$999', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-pro-13-og-202011?wid=1200&hei=630&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604347427000'},
]

const Products = () => {
  return (
  <main>
    <Grid container justify='center' spacing={4}>
      {products.map((product)=>(
      <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
        <Product product={product}/>
      </Grid>))}
    </Grid>
  </main>
 )
}
export default Products