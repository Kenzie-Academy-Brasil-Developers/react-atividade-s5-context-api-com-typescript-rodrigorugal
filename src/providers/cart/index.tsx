import React, { createContext, useState } from "react";
import { Children } from "../../types/Children";
import { Product } from "../../types/Product";

interface ValueProvider {
  cart: Product[];
  addToCart: (item: Product) => void;
  deleteToCart: (deleteItem: Product) => void;
}

export const CartContext = createContext<ValueProvider>({} as ValueProvider);

export const CartProvider = ({ children }: Children) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (item: Product) => {
    setCart([...cart, item]);
  };

  const deleteToCart = (deleteItem: Product) => {
    setCart(cart.filter((item) => item.id !== deleteItem.id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteToCart }}>
      {children}
    </CartContext.Provider>
  );
};
