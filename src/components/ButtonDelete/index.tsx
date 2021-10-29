import React, { useContext } from "react";
import { BoxDel, ButtonDel } from "./style";
import { CartContext } from "../../providers/cart";
import { Product } from "../../types/Product";

interface CheckButton {
  produc: Product;
}

interface Obj {
  item: Product;
}

const ButtonDelete = ({ produc }: CheckButton) => {
  const { deleteToCart } = useContext(CartContext);

  const handlerDeleteCart = (deleteItem: Product) => {
    deleteToCart(deleteItem);
  };

  return (
    <BoxDel>
      <ButtonDel onClick={() => handlerDeleteCart(produc)}>Delete</ButtonDel>
    </BoxDel>
  );
};

export default ButtonDelete;
