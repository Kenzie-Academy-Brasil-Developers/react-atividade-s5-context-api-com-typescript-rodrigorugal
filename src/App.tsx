import React from "react";
import ShowCart from "./components/ShowCart";
import { ProductList } from "./components/ShowProductList";
import { FullScreen, Left, Right } from "./style/AppStyle";

function App() {
  return (
    <FullScreen>
      <Left>
        <h1>Produtos</h1>
        <ProductList />
      </Left>
      <Right>
        <h1>Carrinho</h1>
        <ShowCart />
      </Right>
    </FullScreen>
  );
}

export default App;
