import { useQuery } from "@tanstack/react-query"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { api } from "../../api/api"
import { addToCart } from "../../redux/slices/cartSlice"
import { addToFavorites } from "../../redux/slices/favoritesSlice"
import { getUserInfoSelector } from "../../redux/slices/userSlice"
import './ProductId.css'

export const ProductId = ({products}) => {

    const { productID } = useParams()
    const {token} = useSelector(getUserInfoSelector)
    const dispatch = useDispatch()

    const {data: product} = useQuery({
        queryKey: ['product', productID],
        queryFn: async () => await api.getProductId(productID, token)
    })
    
    return (
        <div className="product__info">
      <img className="product__img" src={product?.pictures} alt="some" />
      <h4 className="product__name">{product?.name}</h4>
      <h4 className="product__name">{product?.description}</h4>
      <div className="product__stocks">
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
      <div className="button_container">
        <div className="button_cart">
        <button onClick={()=>dispatch(addToCart(product?._id))}>В корзину</button>
        </div>
        <div className="button_favorites">
        <button onClick={()=>dispatch(addToFavorites(product?._id))}>В избранное</button>
        </div>
      </div>
    </div>
    )
}