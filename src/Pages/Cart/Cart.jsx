import React from "react";
import { useCart } from "../../components/context/CartProvider";
import "./cartStyle.scss";

export default function Cart() {
  const { cart, addToCart, delFromCart, clearCart } = useCart();
  console.log(cart);

  return (
    <div>
      <h2>Carrito</h2>
      {cart.map((item) => {
        return (
          <div key={item.id} className="itemCart">
            <img src={item.image} alt={item.title}></img>
            <h2>{item.title}</h2>
            <h3>{item.totalPrice} €</h3>
            <p>{item.count}</p>
            <button onClick={() => addToCart(item)}>Añadir Item</button>
            <button onClick={() => delFromCart(item)}>Eliminar Item</button>
          </div>
        );
      })}

      <button onClick={() => clearCart()}>Limpiar Carrito</button>
      <h3>
        Total:
        {cart.reduce((prev, item) => {
          return prev + item.totalPrice;
        }, 0)}
      </h3>
    </div>
  );
}
