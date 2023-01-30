import React from "react";
import './Product.css'

export default function Product({
  price,
  pictures,
  name,
  available,
  discount,
}) {
  return (
    <div className="block">
      <img className="block__image" src={pictures} alt="some" />
      <h4 className="block__title">{name}</h4>
      <div className="block__selector">
        <ul>
          <li>{available ? "Есть в наличии" : "Товар закончился"}</li>
        </ul>
        <ul>
          <li>{discount !== 0 && `Скидка : ${discount} %`}</li>
        </ul>
      </div>
      <div className="block__bottom">
        <div className="block__price">{price} ₽</div>
      </div>
    </div>
  );
}
