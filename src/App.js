import React, { useState } from "react";
import { HomePage, ProductsPage, AdminPage, LogIn } from "./pages";

import { Route, Routes } from "react-router-dom";
import { ItemBlock, Cart } from "./components";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/products/:id" element={<ItemBlock />} />
        <Route path="/cart" element={<Cart loggedInUser={loggedInUser} />} />
        <Route
          path="/users"
          element={<LogIn setLoggedInUser={setLoggedInUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
