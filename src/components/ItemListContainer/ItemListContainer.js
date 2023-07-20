import ItemCount from "../ItemCount/ItemCount";
// here is the representation of the backend response
//impor the data of products
import '../../services/asynMock';
// import the hooks
import { useState, useEffect } from 'react';
import getData from "../../services/asynMock";
import Item from "../Item/Item";
// css
import './ItemListContainer.css'


export default function ItemListContainer(props) {
    // traer los datos simulando una extraccion asincrona
    // se guardan los datos y se actualiza en una variable de estado

    // crear la variable de estado
    // el estado de base se define como un array vacio, osea la constante productos inicial es un array vacio
    const [products, setProducts] = useState([]);

    // funcion asincrona que obtiene los datos con retraso
    async function obtenerDatos() {
        try {
            // se guarda en una constante la respuesta asincrona y el await es para que espere hasta que la respuesta esté
            const respuesta = await getData();
            // luego se actualiza la constante de estado con los nuevos datos que vienen de la funcion asincrona
            setProducts(respuesta);
        }
        catch (error) {
            console.log('error');
        }
    }
    // se usa el hook useEffect para que se obtengan los datos una sola vez y no entre en un bucle de actualizacion 
    // al llamarse una y otra vez la funcion obtenerDatos

    // el array vacio hace que se ejecute una sola vez

    useEffect(() => {
        obtenerDatos();
    }, [])
    return (
        <div className="item-list-principal-div">
            <h1>Listado de productos</h1>
            <div className="contenedor-principal">
                {products.map((item) => {
                    return <Item key={item.id} {...item} />
                })}
            </div>
        </div>
    )
}