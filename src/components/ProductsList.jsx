import React from "react";
import { ProductsItem } from "./index";

function ProductsList({ products }) {
  return (
    <div className="container">
      <div className="products-list">
        {products.map((product) => (
          <ProductsItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
