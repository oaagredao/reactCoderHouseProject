import ButtonComponent from '../ButtonComponent/ButtonComponent'
import './ItemCount.css'
import { useState } from 'react';

export default function ItemCount({onConfirm}) {
    // functions that work for counting buttons
    const [clicks, setClicks] = useState(0)
    // countint plus state
    function ClickPlusCounter() {
        console.log('Clicked Plus Button');
        setClicks(prevClicks=>prevClicks + 1);
    }
    //  countint less clicks function
    function ClickLessCounter() {
        if (clicks > 1) {
            setClicks(prevClicks=> prevClicks - 1);
        }
    }
    return (
        <div className='div-item_count'>
            <div className='divButtonsSumRest'>
                <ButtonComponent onClick={ClickLessCounter} colorFondo='#e66430' label='-' />
                <h3> {clicks}</h3>
                <ButtonComponent onClick={ClickPlusCounter} colorFondo='#e66430' label='+' />
            </div>
            <ButtonComponent onClick={() => onConfirm(clicks)} colorFondo='#e66430' label='Haz click para agregar' />
        </div>
    )
}