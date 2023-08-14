import "./CarWidget.css";
import shopingCartLogo from "../../images/shopping-cart.png";
import { Link } from "react-router-dom";
// context
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

export default function CarWidget() {
  const { getTotalItemsInCart } = useContext(cartContext);

  return (
    <div className="CarWidgetDiv">
      <Link to="/cart">
        <img
          className="CarWidgetLogo"
          src={shopingCartLogo}
          alt="cartlogo"
        ></img>
      </Link>

      <p>{getTotalItemsInCart()}</p>
    </div>
  );
}
