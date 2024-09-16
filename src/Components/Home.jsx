import React, { useContext } from "react";
import Product from "./Components/Product";
import { CartContext } from "../Context/Cart";

function Home() {
  const { products } = useContext(CartContext);
  return (
    <div className="productContainer">
      {products.map((product) => (
        <SingleProduct key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;