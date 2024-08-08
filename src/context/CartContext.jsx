import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItemToCart = (wanted) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === wanted.name);
      if (existingItem) {
        return prevCart.map((item) => (item.name === wanted.name ? { ...item, quantity: item.quantity + 1 } : item));
      } else {
        return [...prevCart, { ...wanted, quantity: 1 }];
      }
    });
  };

  const updateItemInCart = (itemName, change) => {
    setCart((prevCart) => prevCart.map((item) => (item.name === itemName ? { ...item, quantity: Math.max(0, item.quantity + change) } : item)));
  };

  const removeFromCart = (itemName) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== itemName));
  };

  const getQuantityInCart = (itemName) => {
    const item = cart.find((item) => item.name === itemName);
    return item ? item.quantity : 0;
  };

  const getTotalItemsInCart = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getTotalCartPrice = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        updateItemInCart,
        removeFromCart,
        getQuantityInCart,
        getTotalItemsInCart,
        getTotalCartPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
