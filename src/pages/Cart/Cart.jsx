
import { useQuery } from "@tanstack/react-query"
import { useSelector } from "react-redux"
import { api } from "../../api/api";
import { CartItem } from "../../components/CartItem/cartItem";

export const Cart = () => {

const cart  = useSelector (state => state.cart)
const { token } = useSelector(state => state.user)

const {data} = useQuery({
    queryKey:['getCartProducts', token, cart],
    queryFn: () => api.getProductIds(token, cart)
    })

    return (
        <>
        <h1>Корзина</h1>
        {data?.map(product=> <CartItem key={product._id} product={product} />)}
        </>
    )
}