import React from "react";
import { Product } from "../../components/Product/Product";
import { MyLoader } from "../../components/MyLoader/MyLoader";
import { api } from "../../api/api";
import './Home.css'
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getSearchSelector } from "../../redux/slices/filterSlice";

export const Home = () => {

  const searchState = useSelector(getSearchSelector);
  const {token} = useSelector(state => state.user) 

  const { data: items, isLoading} = useQuery({
    queryKey: ["searchProducts", searchState],
    queryFn:  () => api.getSearchProduct(searchState, token)
  });

  return (
    <>
      <div className="container">
        <div className="content">
          <div className="search">
          </div>
              <h2 className="content__title">Все товары ({items?.total})</h2>
              {items?.total === 0 ? <p>Товары отсутствуют</p> : null}
              <div className="content__items">
              {isLoading ? <MyLoader /> : items.products.map((product) => {
                return <Product key={product._id} products={product} />;
                })}
              </div>
        </div>
      </div>
    </>
  );
}
