import React, { useContext } from "react";
import { Box, BoxButton } from "./style";
import { CartContext } from "../../providers/cart";
import { Product } from "../../types/Product";

interface CheckButton {
  produc: Product;
}

const ButtonAdd = ({ produc }: CheckButton) => {
  const { addToCart } = useContext(CartContext);

  const handlerAddCart = (addItem: Product) => {
    addToCart(addItem);
  };

  return (
    <Box>
      <BoxButton onClick={() => handlerAddCart(produc)}>Carrinho</BoxButton>
    </Box>
  );
};

export default ButtonAdd;
