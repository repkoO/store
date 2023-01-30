
import { Link } from "react-router-dom"
 import logoSvg from "../../assets/logo.jpg"
 import './Header.css'

 
 export default function Header () {
 
    return (
        <div className="header">
        <div className="container">
          <div className="header__logo">
            <img src={logoSvg} alt="dog logo" />
            <div>
              <h1>Магазин</h1>
            </div>
          </div>
            <div className="user__logo">
            <Link to={"userinfo"}>
            <button>Профиль</button>
            </Link>
            <Link to={"login"}>
              <button>Выйти</button>
            </Link>
            </div>
         
          
        </div>
      </div>
    )
 }
 
 
 
 