import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


function ProductItem({product}) {
  return (

    <Article>
        <Link to={`/products/${product.id}`}>
          <h1>{product.title}</h1>
        </Link>
          <Img src={product.url}></Img>
          <h3>Price {product.price} SEK</h3>
    </Article>
  
      )
}

const Article = styled.article`
display: flex;
flex-direction: column;
padding: 100px 40px;
margin: 40px;

&:hover{
box-shadow: 4px 8px lightgray;
}
`

const Img = styled.img `
padding: 40px 0px;
max-width: 1080px;
max-height: 1350px;
`

export default ProductItem