import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api/api.js";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { MyLoader } from "../../components/MyLoader/MyLoader.jsx";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice.js";

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
  const dispatch = useDispatch()
  
  const initialValues = {
    email: "",
    password: ""
  };

    const {mutateAsync: regSignUp, isLoading, isError, error} = useMutation({
      mutationFn: async(values) => {
        const res = await api.auth(values);
        const responce = await res.json();
        dispatch(setUser({
          ...responce.data,
          token: responce.token
        }))
        return navigate("/");
      }
    })
    
    if (isLoading) return <MyLoader />

    if (isError) return <p>Error happened : {error.message}</p>

    const onSubmit = async (values) => {
      await regSignUp(values)
    }

  return (

    
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
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
