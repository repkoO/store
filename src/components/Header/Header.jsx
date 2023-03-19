
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import logoSvg from "../../assets/logo.jpg"
import { removeUser } from "../../redux/slices/userSlice";
import { Search } from "../Search/Search";
import './Header.css'

 
 export const Header = () => {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.user)

  const handleExit = () => {
    dispatch(removeUser())
  }
 
    return (
        <div className="header">
        <div className="container">
          <div className="header__logo">
            <img src={logoSvg} alt="dog logo" />
            <div className="header__link">
              <Link to={'/'}><h1>Магазин</h1></Link>
            </div>
          </div>
            <div>
            {token && <Search />}
            </div>
            <div className='some__buttons'>
            { token && <Link to={"userinfo"}> <button>Профиль</button></Link> }
            { token && <Link to={"login"}> <button onClick={handleExit}>Выйти</button></Link> }  
            </div>
        </div>
      </div>
    )
 }
 
 
 
 