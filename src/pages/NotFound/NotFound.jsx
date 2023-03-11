import { Link } from 'react-router-dom'
import './NotFound.css'

export const NotFound = () => {
    
    return (
        <div className="not__found">
            <p>404</p>
            <p>Sorry, the page you visited does not exist.</p>
            <Link to={"/"}>
                <button>На главную страницу</button>
            </Link>
        </div>
    )
}