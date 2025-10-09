"use client";

import React, { createContext, useContext, useState, useMemo } from "react";

// Create a Cart Context
const CartContext = createContext(null);

// CartProvider — wraps your entire app
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Add an item to the cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Remove an item from the cart by index
  const removeItemFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  // Memoize value to prevent unnecessary re-renders
  const value = useMemo(
    () => ({
      cart,
      addToCart,
      removeItemFromCart,
      drawerOpen,
      setDrawerOpen,
    }),
    [cart, drawerOpen]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// Custom Hook — safely access Cart Context
export function useCart() {
  const context = useContext(CartContext);

  // SSR-safe: avoid crash during Next.js build
  if (context === null) {
    if (typeof window === "undefined") {
      return {
        cart: [],
        addToCart: () => {},
        removeItemFromCart: () => {},
        drawerOpen: false,
        setDrawerOpen: () => {},
      };
    }
    throw new Error("useCart must be used within a <CartProvider>");
  }

  return context;
}
