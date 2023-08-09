import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//css bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBootstrap from './components/NavbarBootstrap/NavbarBootstrap';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext } from 'react';
import { cartContext } from './context/cartContext';

//Crear context
// importar el context
// consumirlo
// crear un provider

function App() {
  return (
    <cartContext>
    <BrowserRouter >

      <header className="App-header">
        <NavbarBootstrap/>
      </header>

      <div className='div-body'>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        {/*Ruta con segmento ullr dinamico*/}
        <Route path='/product/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>

        <Route path='/*' element={<h1>Page not found: error </h1>}/>
      </Routes>
      </div>

    </BrowserRouter>
    </cartContext>
  );
}

export default App;

export{cartContext};
