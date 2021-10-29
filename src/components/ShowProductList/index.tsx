import { productsList } from "../../Products";

import ItemProduct from "../ItemProduct";
import { BoxList, ListUl } from "./style";
export const ProductList = () => {
  return (
    <BoxList>
      <ListUl>
        {productsList.map((item) => (
          <ItemProduct item={item} />
        ))}
      </ListUl>
    </BoxList>
  );
};
