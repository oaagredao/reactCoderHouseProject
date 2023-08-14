import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { createOrder } from "../../services/firebase";
import "./CartContainer.css";
import { CartContextProvider } from "../../context/cartContext";
import Swal from "sweetalert2";

export default function CartContainer() {
  const { cart, removeItem, clearCart } = useContext(cartContext); // funciones que vienen del context

  async function handleCheckOut() {
    // se genera el obketo de la compra
    const orderData = {
      items: cart,
      buyer: { name: "mariano", email: "mariano@gmail.com", phone: 123456 },
      date: new Date(),
      total: 0,
    };
    try {
      const idOrder = await createOrder(orderData);

      // hacer sweet alert
      Swal.fire(`Gracias por tu compra, tu numero de compra es: `, `${idOrder}`);

      // limpiar el carrito
      clearCart();
    } catch {
      Swal.fire(`Hubo un error en la compra`, "error");
    }
  }

  if (cart.length === 0) {
    return (
      <div>
        <h1>No hay items en el carrito</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="cart-title">Tu carrito</h1>
        {cart.map((item) => (
          <div key={item.id} className="div-articulosCarrito">
            <h1>{item.title}</h1>
            <p>Precio unitario: {item.price} $</p>
            <p> Cantidad a comprar: {item.count} unidades</p>
            <p> Precio Total: {item.count * item.price} $</p>
            <ButtonComponent
              onClick={() => removeItem(item.id)}
              colorFondo="#e66430"
              label="Eliminar elemento"
            />
          </div>
        ))}
        <div className="div-botonComprar">
        <ButtonComponent
          onClick={handleCheckOut}
          colorFondo="rgb(245, 89, 89)"
          label="Comprar"
        />
        </div>
      </div>
    );
  }
}
