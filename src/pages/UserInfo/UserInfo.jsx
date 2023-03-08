import React from "react";
import { Link } from "react-router-dom";
import "./UserInfo.css"
import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/api";
import { MyLoader } from "../../components/MyLoader/MyLoader";

export const UserInfo = () => {

  const { data: items, isLoading, isError, error } = useQuery({
    queryKey: ["user-info"],
    queryFn: () => api.getUserInfo()
    .then(res => res.json()),
  });

  if (isLoading) return <MyLoader />

  if (isError) return <p>Error happened : {error.message}</p>

   

  return (
    <div className="info">
      <div className="info__title">Личный кабинет</div>
      <div className="user__info">
        <div className="user__name">
          <span>Имя: </span>
          {items.name}
        </div>
        <div className="user__email">
          <span>Email: </span>
          {items.email}
        </div>
        <div className="user__group">
          <span>Группа: </span>
          {items.group}
        </div>
        <div className="about">
          <span>Дополнительная информация: </span>
          <p>{items.about}</p>
        </div>
        <div className="photo">
          <span>Аватар: </span>
          <p>
            <img src={items.avatar} alt="" />
          </p>
        </div>
        <Link to={"/"}>
        <button className="back__button">Назад</button>
        </Link>
      </div>
    </div>
  );
}
