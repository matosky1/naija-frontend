import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  // Load cart from localStorage on first render
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem('naija-cart');
    return stored ? JSON.parse(stored) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('naija-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
