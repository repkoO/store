import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { api } from "../../api.js"

export default function SignIn() {

  const navigate = useNavigate();
  const { setCurrentUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const obj = { email, password };
      const res = await api.auth(obj);
      const responce = await res.json();
      setCurrentUser(responce);
      localStorage.setItem("token", responce.token);
      if (res.ok) {
        navigate("/");
      }
      //проработать ошибки при переходе на TanStack
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Магазин</span>
        <span className="title">Авторизация</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Пароль" />
          <button>Войти</button>
          {/* {err <span>Что-то пошло не так</span>} - добавить*/}
        </form>
        <p>
        <Link to="/register">Зарегистрируйтесь</Link>{" "}, если у вас нет аккаунта.
        </p>
      </div>
    </div>
  );
}
