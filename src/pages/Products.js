import React, {useState, useEffect} from 'react'
import ProductItem from '../components/ProductItem';
import styled from 'styled-components'
import { motion } from "framer-motion"



function Products() {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://codexplained.se/electronics.php');
      const data = await response.json();
      console.log(data)
      
      setProducts(data);
    } catch (error) {
      console.log (error)
    }
  
  }
    useEffect( () => {
      fetchProducts();
    },[])
  



  return (
    <div>
      <H2>
        Welcome to Revive, this is where we give new life to electronics who has been on your shelf too long for you to keep it to yourself!
      </H2>
        <Title className='all-products'>
          All products
            <motion.Emoji
              animate={{y:[0,100,0,100,0,100]}}
              transition={{ duration: 4, delay: 1}}            >
              &#128071;&#127997;
              </motion.Emoji>
        </Title>
    <Parentdiv>
      
        {
          products.map((product) => 
               (
                <ProductItem product={product} key={product.id}/>
              )
          )
        }

    </Parentdiv>
    </div>
  )
}



const Emoji = styled.span `
padding-top: 50px;
height: 50px;
width: 50px;

`

const Title = styled.h1 `
padding: 50px 0px;
font-size: 5em;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: black;
height: 15vh;
`

const H2 = styled(Title) `
text-align: center;
font-size: 4em;
color: white;
background-color:#f5b5d2;
height: 50vh;
padding: 0px 400px
`
const Parentdiv = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`

export default Products