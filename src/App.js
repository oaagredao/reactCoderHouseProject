import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent/ButtonComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//css bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBootstrap from './components/NavbarBootstrap/NavbarBootstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarBootstrap/>
      </header>
      <div className='div-body'>
      <ItemListContainer greetings="Hello, welcome to my page!"/>
      </div>
    </div>
  );
}

export default App;
