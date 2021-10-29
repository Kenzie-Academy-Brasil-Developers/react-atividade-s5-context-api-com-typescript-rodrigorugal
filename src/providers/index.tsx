import React from "react";
import { Children } from "../types/Children";
import { CartProvider } from "./cart";

const Provider = ({ children }: Children) => {
  return <CartProvider>{children}</CartProvider>;
};

export default Provider;
