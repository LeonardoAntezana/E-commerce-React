import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/main/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartContextProvider from './context/CartContext.jsx';
import Cart from './components/main/Cart/Cart';
import Checkout from './components/main/Checkout/Checkout';
import Footer from './components/footer/Footer';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
        <CartContextProvider>
      <NavBar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route exact path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/checkout' element={<Checkout/>}/>
        </Routes>
        </CartContextProvider>
      <Footer/>
    </div>
  </BrowserRouter>
  );
}

export default App;
