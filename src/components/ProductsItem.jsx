import React from "react";
import { Link } from "react-router-dom";

function ProductsItem({ product }) {
  return (
    <div className="products-item">
      <Link to={`/products/${product.id}`}>
        <img src={product.imageURL} alt="car" />
      </Link>
      <div>
        <h1 className="name">{product.name}</h1>
        <p className="price">{product.price} ₽</p>
      </div>
    </div>
  );
}

export default ProductsItem;
