import React, { createContext, useState } from 'react';
import useGet from '../hooks/useGet';

export const CardContext = createContext();

const CardChange = ({ children }) => {
  const { data: products } = useGet("products");
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    setCart(prev => {
      const item = prev.find(p => p.id === id);
      if (item) {
        return prev.map(p =>
          p.id === id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        const product = products.find(p => p.id === id);
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => {
      const item = prev.find(p => p.id === id);
      if (!item) return prev;
      if (item.quantity === 1) return prev.filter(p => p.id !== id);
      return prev.map(p =>
        p.id === id ? { ...p, quantity: p.quantity - 1 } : p
      );
    });
  };

  return (
    <CardContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardChange;
