import "./CarWidget.css"
import shopingCartLogo from "../../images/shopping-cart.png"
// context
import { useContext } from "react"
import { cartContext } from "../../App"

export default function CarWidget(){
    const context = useContext(cartContext);
    console.log(context);

return(
    <div className="CarWidgetDiv">
        <img className="CarWidgetLogo" src={shopingCartLogo} alt="cartlogo"></img>
        <p>{context.cart.length}</p>
    </div>
)
}