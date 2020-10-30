import React from 'react'
import Icofont from 'react-icofont'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav pl-2 w-100">
                <li className="nav-item">
                    <Link className="nav-link text-light" to="#"><Icofont icon="test-bulb" className="nav-icons"/> Hopitals</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" to="#"><Icofont icon="book" className="nav-icons"/> Reviews</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" to="#"><Icofont icon="teacher" className="nav-icons"/> About</Link>
                </li>
            </ul>
        </nav> 
    )
}

export default NavBar
