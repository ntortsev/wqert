import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header, Footer } from "../components";
import { Link } from "react-router-dom";

function ItemBlock() {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch("http://localhost/php+react/server/index.php/products")
      .then((res) => res.json())
      .then((json) => setProduct(json.find((p) => p.id === id)))
      .catch((err) => console.log(err));
  }, []);
  let { id } = useParams();

  return (
    <div className="item-block">
      <Header />
      <div className="item-block__content">
        <img src={product.imageURL} alt="img_foto" />
        <div>
          <div>
            <h1 className="name">{product.name}</h1>
            <p className="price">{product.price} ₽</p>
          </div>
          <Link to="/products">
            <button>Назад</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ItemBlock;
