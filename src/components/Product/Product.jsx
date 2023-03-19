import React from "react";
import './Product.css'

export const Product = ({ products })  => {
  return (
    <div className="block">
      <img className="block__image" src={products.pictures} alt="some" />
      <h4 className="block__title">{products.name}</h4>
      <div className="block__selector">
        <ul>
          <li>{products.available ? "Есть в наличии" : "Товар закончился"}</li>
        </ul>
        <ul>
          <li>{products.discount !== 0 && `Скидка : ${products.discount} %`}</li>
        </ul>
      </div>
      <div className="block__bottom">
        <div className="block__price">{products.price} ₽</div>
      </div>
    </div>
  );
}
