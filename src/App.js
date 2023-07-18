import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent/ButtonComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//css bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBootstrap from './components/NavbarBootstrap/NavbarBootstrap';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarBootstrap/>
      </header>
      <div className='div-body'>
      <ItemListContainer/>
      {/* la etiqueta de abajo es el componente que muestra solo 1 objeto */}
      {/* <ItemDetailContainer/> */}
      </div>
    </div>
  );
}

export default App;
