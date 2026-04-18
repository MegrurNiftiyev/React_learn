import { Link } from "react-router-dom"
import "./index.css"

export function Header() {
    return (
        <div className="header">
            <h2 className="title"> Blog</h2>
            <ul className="options">
                <Link className="link" to={"/"}><li>About</li></Link>
                <Link className="link" to={"/login"}><li>Login</li></Link>
                <Link className="link" to={"/register"}><li>Register</li></Link>


            </ul>
        </div>
    )
}