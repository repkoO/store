import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { api } from "../../api";

export default function SignUp() {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const group = e.target[2].value;
    const password = e.target[3].value;
    const obj = { name, email, group, password };
      const res = await api.reg(obj)
      const responce = await res.json();
      setCurrentUser(responce);
      if (res.ok) {
        navigate("/");
      }
  };
 //проработать ошибки при переходе на TanStack
 
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">DogStore</span>
        <span className="title">Регистрация</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Имя" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Группа" />
          <input type="password" placeholder="Пароль" />
          <button>Зарегистрироваться</button>
        </form>
        <p>
          Уже есть аккаунт? <Link to="/login">Войти</Link>
        </p>
      </div>
    </div>
  );
}
