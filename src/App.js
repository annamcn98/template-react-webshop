import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from './pages/Products';
import Product from './pages/Product';
import Checkout from './pages/Checkout';

function App() {
  return (
    
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<Product />} />   
        </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
