import React, { useState, useContext } from "react";

export const CartContext = React.createContext();

// Custom Hook
export const useCart = () => {
  return useContext(CartContext);
};

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const found = cart.find((cartItem) => {
      return cartItem.id === product.id;
    });
    if (!found) {
      const cartItem = {
        ...product,
        count: 1,
        totalPrice: product.price,
      };
      setCart([...cart, cartItem]);
    } else {
      found.count++;
      found.totalPrice = found.price * found.count;
      setCart([...cart]);
    }
  };

  const delFromCart = (product) => {
    const found = cart.find((cartItem) => {
      return cartItem.id === product.id;
    });
    if (found.count === 1) {
      setCart(cart.filter((cartItem) => cartItem.id !== product.id));
    } else {
      found.count--;
      found.totalPrice = found.price * found.count;
      setCart([...cart]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div>
      <CartContext.Provider value={{ cart, addToCart, delFromCart, clearCart }}>
        {children}
      </CartContext.Provider>
    </div>
  );
}
