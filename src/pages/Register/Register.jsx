import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { MyLoader } from "../../components/MyLoader/MyLoader";

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

export const Register = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
    name: '',
    group: ''
  };

  const {mutateAsync: regSignIn, isLoading, isError, error} = useMutation({
    mutationFn: async (values) => await api.reg(values)
    }
)

  if (isLoading) return <MyLoader />

  if (isError) return <p>Error happened : {error.message}</p>

  const handleSingUp = async (values) => {
    const res = await regSignIn(values)
    if (res.ok) {
      navigate("/");
    }
  }

  //не работает навигация
  
  return (
  <Formik
        initialValues={initialValues}
        onSubmit={handleSingUp}
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
