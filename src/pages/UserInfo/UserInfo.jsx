import React from "react";
import { Link } from "react-router-dom";
import "./UserInfo.css"
import { useSelector } from "react-redux";
import { getUserInfoSelector } from "../../redux/slices/userSlice";

export const UserInfo = () => {
  const profileInf = useSelector(getUserInfoSelector)

  return (
    <div className="info">
      <div className="info__title">Личный кабинет</div>
      <div className="user__info">
        <div className="user__name">
          <span>Имя: </span>
          {profileInf.name}
        </div>
        <div className="user__email">
          <span>Email: </span>
          {profileInf.email}
        </div>
        <div className="user__group">
          <span>Группа: </span>
          {profileInf.group}
        </div>
        <div className="about">
          <span>Дополнительная информация: </span>
          <p>{profileInf.about}</p>
        </div>
        <div className="photo">
          <span>Аватар: </span>
          <p>
            <img src={profileInf.avatar} alt="" />
          </p>
        </div>
        <Link to={"/"}>
        <button className="back__button">Назад</button>
        </Link>
      </div>
    </div>
  );
}
