import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/main/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer gretting='Contenedor'/>
    </div>
  );
}

export default App;
