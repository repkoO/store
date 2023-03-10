import React from "react";
import { Product } from "../../components/Product/Product";
import { MyLoader } from "../../components/MyLoader/MyLoader";
import { api } from "../../api/api";
import './Home.css'
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getSearchSelector } from "../../components/redux/slices/filterSlice";

export const Home = () => {

  const searchState = useSelector(getSearchSelector);
  const token = localStorage.getItem('token');  

  const { data: items, isLoading} = useQuery({
    queryKey: ["searchProducts", searchState],
    queryFn: () => api.getSearchProduct(searchState, token),
  });

  return (
    <>
      <div className="container">
        <div className="content">
          <div className="search">
          </div>
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
