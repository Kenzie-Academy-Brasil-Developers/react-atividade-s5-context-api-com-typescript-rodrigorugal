import React, { createContext, useState, ReactNode } from "react";
import { productsList } from "../../Products";

interface Children {
  children: ReactNode;
}

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface ProductProviderData {
  products: Product[];
}

export const ProductsContext = createContext<ProductProviderData>(
  {} as ProductProviderData
);

export const ProductsProvider = ({ children }: Children) => {
  const [products, setProducts] = useState<Product[]>([]);

  setProducts(productsList);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
