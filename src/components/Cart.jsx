//хуки
import React, { useEffect, useState } from "react";

//компонент Cart
const Cart = ({loggedInUser}) => {
  //переменная состояния для товаров в корзине
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(JSON.parse(loggedInUser?.cart))
  }, [])

  //подсчет итоговой цены при первом рендере компонента
  useEffect(() => {
    if (products.length) {
      setTotalPrice(products.map((p) => p.price).reduce((a, b) => a + b));
    }
  }, []);

  //переменная состояния для итоговой цены
  const [totalPrice, setTotalPrice] = useState(0);

  //функция удаления товара из корзины.
  //находит из всех товаров в корзине нужный (по названию) и удаляет его
  const removeProduct = (title) => {
    setProducts(products?.filter((p) => p.title !== title));
  };

  //изменение количества товара
  //находит товар по названию и меняет свойство quantity(количество) на новое количество товара, а затем добавляет в массив товаров тот же объект, но с обновленным свойством quantity
  const changeQuatity = (title, newQuntity) => {
    const newProducts = [...products];
    newProducts.find((p) => p.title === title).quantity = newQuntity;
    setProducts(newProducts);
  };

  //изменение итоговой цены
  //меняет итого при изменении состояния products, которое может возникнуть в трех случаях: 1) при изменение количества товара (quantity), 2) при удалении товара из корзины и 3) при добавлении товара в корзину
  useEffect(() => {
    if (products.length) {
      setTotalPrice(
        products.map((p) => p.price * p.quantity).reduce((a, b) => a + b)
      );
    } else {
      setTotalPrice(0);
    }
  }, [products]);

  return (
    <div className="cart">
      <h1 className="cart__title">Корзина</h1>
      {products?.map((product, index) => (
        <div key={index} className="cart-product">
          <h3 className="cart-product__title">{product?.title}</h3>
          <p className="cart-product__price">{product?.price} руб.</p>
          <p className="cart-product__quantity">
            Количество: {product?.quantity}
          </p>
          <div className="cart-product__btn">
            {/* увличение количества товара */}
            <button
              className="cart-product__btn--increment btn"
              onClick={() => changeQuatity(product.title, product.quantity + 1)}
            >
              +
            </button>
            {/* уменьшение количества товара */}
            <button
              className="cart-product__btn--decrement btn"
              onClick={() => {
                if (product.quantity > 1) {
                  changeQuatity(product.title, product.quantity - 1);
                }
              }}
            >
              -
            </button>
          </div>
          {/* удаление товара */}
          <button
            className="cart-product__btn--remove btn"
            onClick={() => removeProduct(product?.title)}
          >
            Удалить товар
          </button>
        </div>
      ))}
      <h2 className="cart__total-price">Итого: {totalPrice} руб.</h2>
    </div>
  );
};

export default Cart;
