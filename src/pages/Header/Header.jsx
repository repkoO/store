
import { Link } from "react-router-dom"
 import logoSvg from "../../assets/logo.jpg"
 import './Header.css'

 
 export default function Header () {
 
    return (
        <div className="header">
        <div className="container">
          <div className="header__logo">
            <img width="38" src={logoSvg} alt="dog logo" />
            <div>
              <h1>Магазин</h1>
            </div>
          </div>
          <Link to={"userinfo"}>
            <div className="user__logo">
              <button>Профиль</button>
            </div>
          </Link>
          
        </div>
      </div>
    )
 }
 
 
 
 