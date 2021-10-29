import React, { useContext } from "react";
import { CartContext } from "../../providers/cart";
import ItemProduct from "../ItemProduct";
import { BoxCartList, UlCart } from "./style";
const ShowCart = () => {
  const { cart } = useContext(CartContext);

  return (
    <BoxCartList>
      <UlCart>
        {cart.map((item) => (
          <ItemProduct item={item} buttonCheck={false} />
        ))}
      </UlCart>
    </BoxCartList>
  );
};

export default ShowCart;
