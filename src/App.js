import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//css bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBootstrap from './components/NavbarBootstrap/NavbarBootstrap';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter >

      <header className="App-header">
        <NavbarBootstrap/>
      </header>

      <div className='div-body'>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/product' element={<ItemDetailContainer/>}/>
        <Route path='/*' element={<h1>Page not found: error </h1>}/>
      </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
