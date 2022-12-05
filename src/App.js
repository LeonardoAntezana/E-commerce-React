import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/main/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer gretting='Contenedor'/>}/>
        <Route exact path='/category/:categoryId' element={<ItemListContainer gretting='Contenedor'/>}/>
        <Route exact path='/item/:itemId' element={<ItemDetailContainer greeting={'Details'}/>}/>
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
