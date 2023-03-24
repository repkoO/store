import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/slices/cartSlice";
import './Product.css'

export const Product = ({ products })  => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="block"
    style={{cursor: 'pointer'}}
    onClick={(ev) => {
      navigate(`../products/${products._id}`)
      ev.stopPropagation()
    }}
    >
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
        <button onClick={()=>dispatch(addToCart(products._id))}>В корзину</button>
      </div>
    </div>
  );
}
