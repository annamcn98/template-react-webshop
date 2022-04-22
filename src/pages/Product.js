import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import styled from 'styled-components'
import Nav from '../components/Nav';


function Product() {
  const params = useParams();
  console.log(params)
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
  try {
    const response = await fetch('https://codexplained.se/electronics.php?id=' + params.id);
    const data = await response.json();
    console.log(data)
    
    setProduct(data);
  } catch (error) {
    console.log (error)
  }

}
  useEffect( () => {
    fetchProduct();
  },[])

  return (

    <div>
      <Parentdiv>
            <div>
              <Img src={product.url}></Img>
            </div>
            <Article>
              <H2>{product.title}</H2>
              <Description>Description: {product.description}</Description>
              <H3>Storage: {product.storage} left in stock</H3>
              <Price>{product.price} SEK</Price>
            </Article>
      </Parentdiv>

    </div>

  )
}

const Parentdiv = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
width: auto;
height: 72vh;
padding: 100px 0px;
background-color:#f4f4f4;  

`

const Article = styled.article `
display: flex;
align-items: flex-start;
flex-direction: column;
width: 500px;
margin-left: 100px;
`

const Img = styled.img `
max-width: 1500px;
max-height: 1080px;
`

const H2 = styled.h2 `
font-size: 4em;
`

const Description = styled.p `
font-size: 2em;

`
const H3 = styled.h3 `
font-size: 2em;

`

const Price = styled(H2) `

`


export default Product