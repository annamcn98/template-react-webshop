import React from 'react'
import { Link } from 'react-router-dom'


function ProductItem({product}) {
  return (
    <article>
        <Link to={`/products/${product.id}`}>
          <h1>{product.title}</h1>
        </Link>
          <img src={product.url}></img>
          <h3>Pris: {product.price} SEK</h3>
    </article>
      )
}

export default ProductItem