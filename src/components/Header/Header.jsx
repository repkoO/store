
import { Link } from "react-router-dom"
import logoSvg from "../../assets/logo.jpg"
import { Search } from "../Search/Search";
import './Header.css'

 
 export const Header = () => {

  const token = localStorage.getItem('token');
  const handleExit = () => {
    localStorage.removeItem('token')
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
            {token ? <Search /> : false}
            </div>
            <div>
            <Link to={"userinfo"}>
              {token ? <button>Профиль</button> : false }
            </Link>
            <Link to={"login"}>
              {token ? <button onClick={handleExit}>Выйти</button> : false }
            </Link>
            </div>          
        </div>
      </div>
    )
 }
 
 
 
 