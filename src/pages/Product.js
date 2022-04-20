import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
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
      <Nav />
      
    <article>
      <h1>{product.title}</h1>
      <img src={product.url}></img>
      <p>Beskrivning: {product.description}</p>
      <h3>Lagerstatus: {product.storage} stk i lager</h3>
      <h2>Pris: {product.price} SEK</h2>
    </article>

    </div>
    


  )
}

export default Product