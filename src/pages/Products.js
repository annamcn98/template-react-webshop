import React, {useState, useEffect} from 'react'
import ProductItem from '../components/ProductItem';
import styled from 'styled-components'



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
        <h1>All products</h1>
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

const Parentdiv = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
border: solid 4px black;
`

export default Products