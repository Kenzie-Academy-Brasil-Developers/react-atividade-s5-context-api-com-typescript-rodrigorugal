import React from "react";
import { Product } from "../../types/Product";
import ButtonAdd from "../ButtonAdd";
import ButtonDelete from "../ButtonDelete";
import { Item } from "./style";

export interface Item {
  item: Product;
  buttonCheck?: boolean;
}

const ItemProduct = ({ item, buttonCheck = true }: Item) => {
  const { id, title, description, price, image } = item;

  return (
    <Item key={id}>
      <div className="imageItem">
        <img src={image} alt={title} />
      </div>
      <div className="datasProduct">
        <h2>{title}</h2>
        <p>
          <span className="price">
            {price.toLocaleString("pt-Br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </p>
        <p>{description}</p>
      </div>
      {buttonCheck ? (
        <ButtonAdd produc={item} />
      ) : (
        <ButtonDelete produc={item} />
      )}
    </Item>
  );
};

export default ItemProduct;
