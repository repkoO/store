import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { api } from "../../api.js";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

let validateSchema = Yup.object({
  email: Yup.string()
  .email()
  .required("Введите e-mail"),
  password: Yup.string()
  .required("Введите пароль")
  .min(8, "Минимальное количество символов 8."),
});

export default function Login() {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(AuthContext);

  const initialValues = {
    email: "",
    password: ""
  };

  const handleSubmit = async (values) => {
    const res = await api.auth(values);
    const responce = await res.json();
    setCurrentUser(responce);
    localStorage.setItem("token", responce.token);
    if (res.ok) {
      navigate("/");
    }
    //проработать ошибки при переходе на TanStack
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validateSchema}
    >
      <Form>
        <div className="formContainer">
          <div className="formWrapper">
            <span className="logo">Магазин</span>
            <span className="title">Авторизация</span>
            <Field name="email" placeholder="email" type="Email" />
            <ErrorMessage name="email" component="p" />
            <Field name="password" placeholder="Пароль" type="password" />
            <ErrorMessage name="password" component="p" />
            <button type="submit">Войти</button>
            <p>
              <Link to="/register">Зарегистрируйтесь</Link> , если у вас нет
              аккаунта.
            </p>
          </div>
        </div>
      </Form>
    </Formik>
  );
}
