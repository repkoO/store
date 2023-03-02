import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api/api.js";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { MyLoader } from "../../components/MyLoader/MyLoader.jsx";

let validateSchema = Yup.object({
  email: Yup.string()
  .email()
  .required("Введите e-mail"),
  password: Yup.string()
  .required("Введите пароль")
  .min(8, "Минимальное количество символов 8."),
});

export const Login = () => {
  const navigate = useNavigate();
  
  const initialValues = {
    email: "",
    password: ""
  };

    const {mutateAsync: regSignUp, isLoading, isError, error} = useMutation({
      mutationFn: async(values) => {
        const res = await api.auth(values);
        const responce = await res.json();
        localStorage.setItem("token", responce.token);
        if (res.ok) {
          navigate("/");
          }
        return responce;
      }
    })
    
    if (isLoading) return <MyLoader />

    if (isError) return <p>Error happened : {error.message}</p>

    const handleSingIn = async (values) => {
      await regSignUp(values)
    }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSingIn}
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
