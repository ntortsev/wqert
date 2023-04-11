import React, { useState } from "react";

function AddForm({ addProduct }) {
  const [inputName, setInputName] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputImage, setInputImage] = useState("");
  return (
    <form
      onSubmit={(e) =>
        addProduct(
          e,
          inputImage,
          inputName,
          inputPrice,
          setInputName,
          setInputPrice,
          setInputImage
        )
      }
    >
      <input
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        placeholder="Название товара"
      />
      <input
        type="text"
        value={inputPrice}
        onChange={(e) => setInputPrice(e.target.value)}
        placeholder="Цена товара"
      />
      <input
        type="text"
        value={inputImage}
        onChange={(e) => setInputImage(e.target.value)}
        placeholder="Url картинки"
      />
      <button>Добавить</button>
    </form>
  );
}

export default AddForm;
