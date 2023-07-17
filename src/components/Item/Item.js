import './Item.css'
import ButtonComponent from '../ButtonComponent/ButtonComponent'


// imagen proof
import imagen from'../../images/items/fideos-ramen.jpg';


export default function Item(props){
    const {title,description,img,price}=props;
    return(
        <div className='card-principalDiv'>
            <div className='card-header'>
                <h2>{title}</h2>
            </div>
            <div className='card-img'>
                <img src={imagen} alt={title}></img>
            </div>
            <div className='card-body'>
                <h4>{price}</h4>
                <p >{description}</p>
            </div>
            <ButtonComponent label='Ver producto' colorFondo='#e66430'/>
        </div>
    )

}
