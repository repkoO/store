import React from "react";
import { Product } from "../../components/Product/Product";
import { MyLoader } from "../../components/MyLoader/MyLoader";
import { api } from "../../api/api";
import './Home.css'
import { useQuery } from "@tanstack/react-query";

export const Home = () => {

  const { data: items, isLoading} = useQuery({
    queryKey: ["products"],
    queryFn: () => api.getProducts(localStorage.getItem("token"))
  });

  return (
    <>
      <div className="container">
        <div className="content">
              <h2 className="content__title">Все товары ({items?.total})</h2>
              <div className="content__items">
                {isLoading ? <MyLoader /> : items.products.map((products) => {
                return <Product key={products._id} {...products} />;
                })}
              </div>
        </div>
      </div>
    </>
  );
}
