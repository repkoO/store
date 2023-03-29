import { useDispatch } from 'react-redux'
import { dicrementProduct, incrementProduct, removeFromCart } from '../../redux/slices/cartSlice'
import { TotalPrice } from '../../utils/cart'
import './cartItem.css'
export const CartItem = ({product}) => {
  const dispatch = useDispatch()

    return (
      <>
    <div className="cart__info">
      <img className="cart__img" src={product?.pictures} alt="some" />
      <h4 className="cart__name">{product?.name}</h4>
      <h4 className="cart__name">{product?.description}</h4>
      <div className="cart__stocks">
        <ul>
          <li>{product?.discount !== 0 && `Скидка : ${product?.discount} %`}</li>
        </ul>
      </div>
      <div className="cart__wrapper">
      <div className="cart__price">
        <div className="cart__price_count">Цена: {product?.price} ₽</div>
      </div>
      <div>
        <div className="cart__price_count">Количество: {product?.count}</div>
      </div>
      <div>
        <div className="cart__price_count">Итоговая стоимость: {TotalPrice(product?.count, product?.price, product?.discount)} ₽</div>
      </div>
      </div>
      <div className="cart__button">
        <button onClick={() => dispatch(incrementProduct(product._id))}>+</button>
        <button onClick={() => dispatch(dicrementProduct(product._id))}>-</button>
      </div>
      <div>
        <button onClick={() => dispatch(removeFromCart(product._id))}> Удалить </button>
      </div>
    </div>
    </>
)
}