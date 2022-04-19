import React, {useState, useEffect} from 'react'
import ProductItem from '../components/ProductItem';
import Product from './Product';


function Products() {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://codexplained.se/cars.php');
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
      
        <h1>Alla bilar</h1>
        {
          products.map((product) => 
               (
                <ProductItem product={product} key={product.id}/>
              )
          )
        }

    </div>
  )
}

export default Products