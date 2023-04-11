import React, { useState, useEffect } from "react";
import { Footer, Header, ProductsList } from "../components";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost/php+react/server/index.php/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="products">
      <Header />
      <ProductsList products={products} />
      <Footer />
    </div>
  );
}

export default ProductsPage;
