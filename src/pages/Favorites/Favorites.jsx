import { useQuery } from "@tanstack/react-query"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { api } from "../../api/api"
import { FavoritesItem } from "../../components/Favorites/FavoritesItem"
import { removeAllFavorites } from "../../redux/slices/favoritesSlice"

export const Favorites = () => {

    const favorites  = useSelector (state => state.favorites)
    const { token } = useSelector(state => state.user)
    const dispatch = useDispatch()

    const {data: product} = useQuery({
        queryKey:['getFavoritesProducts', token, favorites],
        queryFn: async () => {
            return await Promise.allSettled(
                favorites.map(element => api.getProductsByIdsFav(element.id, token)
                .then(res => res.json())))
                .then(res => res.map(el => el.value))
        }
        })

    return (
        <>
        <h1>Избранное</h1>
        {product?.length !== 0 &&<button className="button__cart" onClick={() => dispatch(removeAllFavorites())}>Удалить все</button> }
        {product?.length === 0 ? 
        <p className="cart__p">В избранном пусто, вернитесь на <NavLink to={"/"}><button>Главную</button></NavLink></p> 
        : 
        product?.map(product => <FavoritesItem key={product._id} product={product} />)}
        </>
    )
}