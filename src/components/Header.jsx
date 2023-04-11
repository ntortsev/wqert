import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          width={90}
          src="https://www.pngmart.com/files/13/Akatsuki-Logo-PNG-Pic.png"
          alt="logo"
        />
      </Link>
      <ul className="header__links">
        <Link to="/">
          <li>Главная</li>
        </Link>
        <Link to="/products">
          <li>Товары</li>
        </Link>
        <Link to="/cart">
          <li>Корзина</li>
        </Link>
        <Link to="/users">
          <li>Войти</li>
        </Link>
        <Link to="/admin">
          <li>Админка</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
