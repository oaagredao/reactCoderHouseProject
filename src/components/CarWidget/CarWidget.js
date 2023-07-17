import "./CarWidget.css"
import shopingCartLogo from "../../images/shopping-cart.png" 
export default function CarWidget(){
return(
    <div className="CarWidgetDiv">
        <img className="CarWidgetLogo" src={shopingCartLogo} alt="cartlogo"></img>
        <p>#</p>
    </div>
)
}