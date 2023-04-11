import React, { useState } from "react";

function DeleteForm({ deleteProduct }) {
  const [inputId, setInputId] = useState("");
  return (
    <form onSubmit={(e) => deleteProduct(e, inputId, setInputId)}>
      <input
        type="text"
        value={inputId}
        onChange={(e) => setInputId(e.target.value)}
        placeholder="Удалить товар с id"
      />
      <button>Удалить</button>
    </form>
  );
}

export default DeleteForm;
