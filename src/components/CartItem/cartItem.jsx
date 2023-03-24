export const CartItem = ({product}) => {

    return (
<div className="product__info">
      <img className="product__img" src={product?.pictures} alt="some" />
      <h4 className="product__name">{product?.name}</h4>
      <h4 className="product__name">{product?.description}</h4>
      <div className="">
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
)
}