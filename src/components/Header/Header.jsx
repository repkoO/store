
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import logoSvg from "../../assets/logo.jpg"
import { removeUser } from "../../redux/slices/userSlice";
import { Search } from "../Search/Search";
import './Header.css'

 
 export const Header = () => {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.user)
  const cart = useSelector(state => state.cart)
  const handleExit = () => {
    dispatch(removeUser())
  }
 
    return (
        <div className="header">
        <div className="container">
          <div className="header__logo">
            <img src={logoSvg} alt="dog logo" />
            <div className="header__link">
              <NavLink to={'/'}><h1>Магазин</h1></NavLink>
            </div>
          </div>
            <div>
            {token && <Search />}
            </div>
            <div className='some__buttons'>
            { token && <NavLink to={"cart"}> <button>Корзина({cart.length})</button></NavLink> }
            { token && <NavLink to={"userinfo"}> <button>Профиль</button></NavLink> }
            { token && <NavLink to={"login"}> <button onClick={handleExit}>Выйти</button></NavLink> }  
            </div>
        </div>
      </div>
    )
 }
 
 
 
 