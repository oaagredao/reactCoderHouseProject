import { useState, useEffect, useContext } from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { getProductData } from "../../services/firebase";
import ItemCount from "../ItemCount/ItemCount";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ItemDetailContainer.css";
import { DotPulse } from "@uiball/loaders";
// cart context
import { cartContext } from "../../context/cartContext";
import Swal from "sweetalert2";

export default function ItemDetailContainer() {
  // crear la variable de estado
  // el estado de base se define como un array vacio, osea la constante productos inicial es un array vacio
  const [product, setProduct] = useState({});
  // creo un estado para cargando
  const [isLoading, setIsLoading] = useState(true);

  // añadido al carro
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  // vamos a llamar a UseParams para atrapar el valor variable de la url de los productos
  const { id } = useParams();

  // conectarse al cart context
  const { addToCart, getItemQuantity } = useContext(cartContext);

  // itemCart
  const itemInCart = getItemQuantity(product);

  const maxItems = product.stock - itemInCart;

  // funcion asincrona que obtiene los datos con retraso
  async function obtenerDato(id) {
    try {
      // se guarda en una constante la respuesta asincrona y el await es para que espere hasta que la respuesta esté
      const respuesta = await getProductData(id);
      // luego se actualiza la constante de estado con los nuevos datos que vienen de la funcion asincrona
      setProduct(respuesta);
      setIsLoading(false);

      /*
           //////////////////////////// control///////////////////////////////
            console.log("Imprimir la const respuesta");
            console.log(respuesta);
            console.log("Imprimir el cambio de estado");
            console.log(product);
            */
    } catch (error) {
      console.log("error");
    }
  }

  // se usa el hook useEffect para que se obtengan los datos una sola vez y no entre en un bucle de actualizacion
  // al llamarse una y otra vez la funcion obtenerDatos

  // el array vacio hace que se ejecute una sola vez

  useEffect(() => {
    obtenerDato(id);
  }, []);

  // funcion para agregar al carrito
  function handleAddToCart(clicks) {
    addToCart(product, clicks);
    Swal.fire(
      `Producto agregado al carrito, cantidad:`,
      `${clicks}`
    )
    setIsAddedToCart(true);
  }

  if (isLoading) {
    return <DotPulse size={60} speed={1.3} color="black" />;
  } else {
    return (
      <div className="div_Item_Detail_Container">
        <div className="div-img">
          <img src={product.img} alt={product.title}></img>
        </div>
        <div className="div-title">
          <h2>{product.title}</h2>
        </div>
        <div className="div-detailContainer-body">
          <h4>El precio es ${product.price}</h4>
          <p>{product.description}</p>
        </div>
        {/*Sigue la parte del itemcount con un renderizado que depende
         */}
        {product.stock > 0 ? (
          /* Si tenemos STOCK */
          isAddedToCart ? (
            <Link to="/cart">
              <ButtonComponent colorFondo='#e66430' label='Ir al carrito'></ButtonComponent>
            </Link>
          ) : (
            <div className="div-itemCount">
              <ItemCount stock={maxItems} onConfirm={handleAddToCart} />
            </div>
          )
        ) : (
          // END si tenemos stock
          <p>No hay stock disponible</p>
        )}
        {itemInCart > 0 && (
          <h2>Ya agregaste {itemInCart} unidades de este producto</h2>
        )}
        <div className="div-botonVolverInicio">
        <Link to="/">
          <ButtonComponent colorFondo='rgb(245, 89, 89)' label='Volver al Inicio'></ButtonComponent>
        </Link>
        </div>
      </div>
    );
  }
}
