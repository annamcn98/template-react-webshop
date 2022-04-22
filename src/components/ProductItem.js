import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


function ProductItem({product}) {
  return (

    
    <Article>
        <H1 to={`/products/${product.id}`}>
          <h1>{product.title}</h1>
        </H1>
            <Link to={`/products/${product.id}`}>
            <Img src={product.url}></Img>
            </Link>
          <H3>{product.price} SEK</H3>
    </Article>
  
      )
}

const Article = styled.article`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 100px 40px;
margin: 60px 100px;
color: black;
width: 1080px;
&:hover{

  background-color:#f4f4f4;  

  }
`

const H1 = styled(Link) `
font-size: 2em;
text-decoration: none;
color: black;
`

const H3 = styled.h3 `
font-size: 2.5em;
`


const Img = styled.img `
padding: 40px 0px;
max-width: 1080px;
max-height: 900px;
`

export default ProductItem