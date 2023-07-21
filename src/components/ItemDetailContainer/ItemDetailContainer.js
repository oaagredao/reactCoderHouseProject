import { useState, useEffect } from 'react';
import {getProductData} from "../../services/asynMock";
import ItemCount from '../ItemCount/ItemCount';
import { useParams } from 'react-router-dom';
import "./ItemDetailContainer.css"

export default function ItemDetailContainer(){

     // crear la variable de estado
    // el estado de base se define como un array vacio, osea la constante productos inicial es un array vacio
    const [product, setProduct] = useState({});

    // vamos a llamar a UseParams para atrapar el valor variable de la url de los productos
    const {id}=useParams();
    console.log(useParams());

    
    // funcion asincrona que obtiene los datos con retraso
    async function obtenerDato(id) {
        try {
            // se guarda en una constante la respuesta asincrona y el await es para que espere hasta que la respuesta esté
            const respuesta = await getProductData(id);
            // luego se actualiza la constante de estado con los nuevos datos que vienen de la funcion asincrona
            setProduct(respuesta);

           //////////////////////////// control///////////////////////////////
            console.log("Imprimir la const respuesta");
            console.log(respuesta);
            console.log("Imprimir el cambio de estado");
            console.log(product);
        }
        catch (error) {
            console.log('error');
        }
    }

    

     // se usa el hook useEffect para que se obtengan los datos una sola vez y no entre en un bucle de actualizacion 
    // al llamarse una y otra vez la funcion obtenerDatos

    // el array vacio hace que se ejecute una sola vez

    useEffect(() => {
        obtenerDato(id);
    }, [])

    return (
        <div className='div_Item_Detail_Container' >
            <div className='div-img'>
            <img src={product.img} alt={product.title}></img>
            </div>
            <div className='div-title'>
                <h2>{product.title}</h2>
            </div>
            <div className='div-detailContainer-body'>
                <h4>El precio es ${product.price}</h4>
                <p>{product.description}</p>
            </div>
            <ItemCount/>
        </div>
    )

}// funcion detail container