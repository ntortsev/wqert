import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LogIn({ setLoggedInUser }) {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost/php+react/server/index.php/users")
      .then((res) => res.json())
      .then((json) => setUsers(json))
      .catch((err) => console.log(err));
  }, []);

  const [inputNickname, setInputNickname] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const loginForm = (e) => {
    e.preventDefault();
    users.find((user) => {
      if (user.nickname === inputNickname && user.password === inputPassword) {
        setLoggedInUser(user);
        navigate("/");
        return console.log("вы вошли");
      } else {
        return console.log("вы не вошли");
      }
    });
  };

  return (
    <div className="login">
      <form onSubmit={(e) => loginForm(e)}>
        <input
          type="text"
          value={inputNickname}
          onChange={(e) => setInputNickname(e.target.value)}
          placeholder="Никнейм"
        />
        <input
          type="text"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          placeholder="Пароль"
        />
        <button>Войти</button>
      </form>
    </div>
  );
}

export default LogIn;
