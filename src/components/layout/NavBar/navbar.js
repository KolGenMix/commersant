import { Link } from 'react-router-dom'
import React from 'react'


const NavBar = () => {
    return (
        <nav>
            <Link to="/">Main</Link>
            <Link to="/login">Login</Link>
            <Link to="/reg">Reg</Link>
        </nav>
    )

}
export default NavBar