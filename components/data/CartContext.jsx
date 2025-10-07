"use client";
import React, { createContext, useContext, useState } from "react";

// Create a context for the cart
const CartContext = createContext();

// Provider component that wraps your app and makes cart state available
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Add item to cart
  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  // Remove item from cart by index
  const removeItemFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  // Provide all cart functions and state
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeItemFromCart, drawerOpen, setDrawerOpen }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook to use cart context
export const useCart = () => useContext(CartContext);
