import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer, AddForm, DeleteForm } from "../components";

function AdminPage() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showDeleteForm, setShowDeleteFrom] = useState(false);

  const addProduct = (
    e,
    image,
    name,
    price,
    setInputName,
    setInputImage,
    setInputPrice
  ) => {
    e.preventDefault();
    fetch("http://localhost/php+react/server/index.php/products", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name: name,
        price: price,
        imageUrl: image,
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));

    setShowAddForm(!showAddForm);
    setInputImage("");
    setInputName("");
    setInputPrice("");
  };

  const deleteProduct = (e, id, setInputId) => {
    e.preventDefault();
    fetch(`http://localhost/php+react/server/index.php/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
    setInputId("");
    setShowDeleteFrom(!showDeleteForm)
  };

  return (
    <div className="admin">
      <Link to="/">
        <button className="admin__back">Back</button>
      </Link>
      <div className="admin__content">
        <ul className="admin__btns">
          <li onClick={() => setShowAddForm(!showAddForm)}>Добавить товар</li>
          <li>Изменить товар</li>
          <li onClick={() => setShowDeleteFrom(!showDeleteForm)}>
            Удалить товар
          </li>
        </ul>
        {showAddForm && <AddForm addProduct={addProduct} />}
        {showDeleteForm && <DeleteForm deleteProduct={deleteProduct} />}
      </div>
      <Footer />
    </div>
  );
}

export default AdminPage;
