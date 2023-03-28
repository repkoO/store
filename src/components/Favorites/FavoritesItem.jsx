import './FavoritesItem.css'

export const FavoritesItem = ({product}) => {

    return (
      <>
    <div className="cart__info">
      <img className="cart__img" src={product?.pictures} alt="some" />
      <h4 className="cart__name">{product?.name}</h4>
      <h4 className="cart__name">{product?.description}</h4>
      <div className="cart__stocks">
        <ul>
          <li>{product?.available ? "Есть в наличии" : "Товар закончился"}</li>
        </ul>
        <ul>
          <li>{product?.discount !== 0 && `Скидка : ${product?.discount} %`}</li>
        </ul>
      </div>
      <div className="">
        <div className="">{product?.price} ₽</div>
      </div>
    </div>
    </>
)
}