import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/main/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartContextProvider from './context/CartContext.jsx';
import Cart from './components/main/Cart/Cart';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
        <CartContextProvider>
      <NavBar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer gretting='Contenedor'/>}/>
          <Route exact path='/category/:categoryId' element={<ItemListContainer gretting='Contenedor'/>}/>
          <Route exact path='/item/:itemId' element={<ItemDetailContainer greeting={'Details'}/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
        </Routes>
        </CartContextProvider>
    </div>
  </BrowserRouter>
  );
}

export default App;
