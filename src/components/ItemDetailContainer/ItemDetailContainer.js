import { useState, useEffect, useContext } from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { getProductData } from "../../services/asynMock";
import ItemCount from "../ItemCount/ItemCount";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ItemDetailContainer.css";
// import loader
// loader
import { DotPulse } from "@uiball/loaders";
// cart context
import { cartContext } from "../../App";

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
  const { addToCart, getItemInCart } = useContext(cartContext);

  // itemCart
  const itemInCart = getItemInCart(id);

  const maxItems = itemInCart
    ? product.stock - itemInCart.count
    : product.stock;

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
    alert(`Producto agregado al carrito, cantidad: ${clicks}`);
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
            <a href="/cart">Ir al carrito</a>
          ) : (
            <ItemCount stock={maxItems} onConfirm={handleAddToCart} />
          )
        ) : (
          // END si tenemos stock
          <p>No hay stock disponible</p>
        )}
        {itemInCart && (
          <h2>Ya agregaste {itemInCart.count} unidades de este producto</h2>
        )}
        <Link to="/">
          <ButtonComponent>Volver al inicio</ButtonComponent>
        </Link>
      </div>
    );
  }
} // funcion detail container
