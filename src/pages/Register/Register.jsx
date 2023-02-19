import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { api } from "../../api";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

let validateSchema = Yup.object({
  email: Yup.string()
  .email()
  .required('Введите e-mail'),
  password: Yup.string()
  .required('Введите пароль') 
  .min(8, 'Минимальное количество символов 8.'),
  name: Yup.string()
  .required('Введите имя'),
  group: Yup.string()
  .required('Введите группу'),
});

export default function Register() {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(AuthContext);

  const initialValues = {
    email: '',
    password: '',
    name: '',
    group: ''
  };

  const handleSubmit = async (values) => {
    const res = await api.reg(values);
    const responce = await res.json();
    setCurrentUser(responce);
    if (res.ok) {
      navigate("/");
    }
  };
  //проработать ошибки при переходе на TanStack

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
        <span className="title">Регистрация</span>
          <Field name="name" placeholder="Имя" type="name" />
          <ErrorMessage name="name" component='p' />
          <Field name="email" placeholder="email" type="Email" />
          <ErrorMessage name="email" component='p' />
          <Field name="group" placeholder="Группа" type="group" />
          <ErrorMessage name="group" component='p' />
          <Field name="password" placeholder="Пароль" type="password" />
          <ErrorMessage name="password" component='p'/>
          <button type="submit">Войти</button>
          <p>
          Уже есть аккаунт? <Link to="/login">Войти</Link>
          </p>
          </div>
          </div>
        </Form>
      </Formik>
  );
}
