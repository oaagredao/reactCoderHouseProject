// here is the representation of the backend response
//impor the data of products
import "../../services/asynMock";
// import the hooks
import { useState, useEffect } from "react";
import getData from "../../services/asynMock";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
// css
import "./ItemListContainer.css";
// importamos la funcion que manda el producto por categoria
import { getProductCategory } from "../../services/asynMock";
// loader
import { DotPulse } from "@uiball/loaders";

export default function ItemListContainer(props) {
  // traer los datos simulando una extraccion asincrona
  // se guardan los datos y se actualiza en una variable de estado

  // crear la variable de estado
  // el estado de base se define como un array vacio, osea la constante productos inicial es un array vacio
  const [products, setProducts] = useState([]);
  // creo un estado para el estado cargando
  const [isLoading, setIsLoading]=useState(true);

  // vamos a llamar a UseParams para atrapar el valor variable de la url de los productos
  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunction = categoryId ? getProductCategory : getData;

    asyncFunction(categoryId)
      .then((response) => {
        setProducts(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });

  }, [categoryId]);

  // if si no hay datos en el products, se muestre un boton de cargar
  if (isLoading) {
    return <DotPulse size={60} speed={1.3} color="black" />;
  }

  return (
    <div className="item-list-principal-div">
      {/*agregamos una condicion ternaria para cambiar el valor del h1 dependiendo del category ID*/}
      {categoryId ? (
        <h1> Categoría tipo: {categoryId}</h1>
      ) : (
        <h1>Listado de productos</h1>
      )}

      <div className="contenedor-principal">
        {products.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}
