
import { useQuery } from "@tanstack/react-query"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import { api } from "../../api/api";
import { CartItem } from "../../components/CartItem/cartItem";
import { removeAllCart } from "../../redux/slices/cartSlice";

export const Cart = () => {

const dispatch = useDispatch()
const cart  = useSelector (state => state.cart)
const { token } = useSelector(state => state.user)


const {data: product} = useQuery({
    queryKey:['getCartProducts', token, cart],
    queryFn: async () => {
        return await Promise.allSettled(
            cart.map(async element => {
                const product = await api.getProductsByIds(element.id, token).then(res => res.json())
                return { ...product, count:element.count }
            }))
            .then(res => res.map(element => element.value))
    }
    })


    return (
        <>
        <h1>Корзина</h1>
        {product?.length !== 0 &&<button className="button__cart" onClick={() => dispatch(removeAllCart())}>Удалить все</button> }
        {product?.length === 0 ? 
        <p className="cart__p">Корзина пуста, вернитесь на <NavLink to={"/"}><button>Главную</button></NavLink></p> 
        : 
        product?.map(product => <CartItem key={product._id} product={product} />)}
        </>
    )
}