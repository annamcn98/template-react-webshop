import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from './pages/Products';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    
    <div className='App'>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<Product />} />   
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  
  );
}


export default App;
