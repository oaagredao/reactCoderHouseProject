import './Item.css'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import { Link } from 'react-router-dom';

export default function Item(props){
    const {title,description,img,price,id}=props;
    return(
        <div className='card-principalDiv'>
            <div className='card-header'>
                <h2>{title}</h2>
            </div>
            <div className='card-img'>
                <img src={img} alt={title}></img>
            </div>
            <div className='card-body'>
                <h4>The price is: {price}</h4>
                <p >{description}</p>
            </div>
            <Link to={`/product/${id}`}>
            <ButtonComponent label='Ver producto' colorFondo='#e66430'/>
            </Link>
        </div>
    )

}
