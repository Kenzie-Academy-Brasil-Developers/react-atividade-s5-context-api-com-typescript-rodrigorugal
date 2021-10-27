import { useContext } from "react";
import { ProductsContext } from "../../providers/products";

export const ProductList = () => {
  const { products } = useContext(ProductsContext);

  console.log(products);

  return (
    <div>
      {products &&
        products.map((item) => (
          <div>
            <h3>{item.title}</h3>
          </div>
        ))}
    </div>
  );
};
