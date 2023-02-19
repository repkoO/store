
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
            {/* <div className="search">
            <input className="search_input"></input>
            </div> */}
          </div>
            <div>
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
 
 
 
 