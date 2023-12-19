import React from "react" 
import {Link} from "react-router-dom"

export default function Navbar(props) {
    const {logout, token} = props
    return (
        <div className="navbar">
            {token && <Link 
                        className="link" 
                        to="/profile">
                            Profile
                        </Link>}
            <Link 
                className="link"
                to="/public">
                    Public
            </Link>
            {token && <button className="logout" 
                        onClick={logout}>
                            Logout
                        </button>}
        </div>
    )
}