import React from "react";

export default function Product({
  _id,
  price,
  pictures,
  name,
  available,
  discount,
}) {
  return (
    <div className="product-block">
      <img className="product-block__image" src={pictures} alt="Pizza" />
      <h4 className="product-block__title">{name}</h4>
      <div className="product-block__selector">
        <ul>
          <li>{available ? "Есть в наличии" : "Товар закончился"}</li>
        </ul>
        <ul>
          <li>{discount !== 0 && `Скидка : ${discount} %`}</li>
        </ul>
      </div>
      <div className="product-block__bottom">
        <div className="product-block__price">{price} ₽</div>
        <div className="button button--outline button--add">
          <span>Добавить</span>
        </div>
      </div>
    </div>
  );
}
