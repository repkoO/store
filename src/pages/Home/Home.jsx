import React, { useState } from "react";
import { useEffect } from "react";
import { Product } from "../../components/Product/Product";
import { MyLoader } from "../../components/MyLoader/MyLoader";
import { api } from "../../api/api";
import './Home.css'
import { useQuery } from "@tanstack/react-query";

export const Home = () => {
  const [status, setStatus] = useState(false);
  const [items, setItems] = useState({});
  const token = localStorage.getItem("token")

  
  useEffect(() => {
      const getProducts = async () => {
        setStatus("loading");
        const res = await api.getProducts(token)
        const responce = await res.json();
        setItems(responce);
        setStatus("success");
      };
       //проработать ошибки при переходе на TanStack
      getProducts();
  }, [token]);

  const skeletons = [...new Array(6)].map((_, i) => <MyLoader key={i} />);

  let products;
  if (items.products) {
    products = items.products.map((obj) => {
      return <Product key={obj._id} {...obj} />;
    });
  }

  return (
    <>
      <div className="container">
        <div className="content">
              <h2 className="content__title">Все товары ({items.total})</h2>
              <div className="content__items">
                {status === "loading" ? skeletons : products}
              </div>
        </div>
      </div>
    </>
  );
}
