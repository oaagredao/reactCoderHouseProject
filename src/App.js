import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
//css bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarBootstrap from "./components/NavbarBootstrap/NavbarBootstrap";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import CartContainer from "./components/CartContainer/CartContainer";
import { exportProducts } from "./services/firebase";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <header className="App-header">
          <NavbarBootstrap />
        </header>
        <div className="div-body">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            {/*Ruta con segmento ullr dinamico*/}
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            {/*Ruta para ir al carrito, por ahora coloco el item list*/}
            <Route path="/cart" element={<CartContainer />} />

            <Route path="/*" element={<h1>Page not found: error </h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
