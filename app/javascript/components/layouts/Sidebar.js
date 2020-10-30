import React from 'react'
import Icofont from 'react-icofont'
import { Link } from 'react-router-dom'
import './sidebar.scss'

const Sidebar = () => {
    return (
        <aside className="sidebar bg-default-blue col col-md-4">
            <header className="mt-5">
                <div className="header-content">
                    <div className="header-content-image">
                        <Icofont icon="pigeon-2" className="text-center" />
                    </div>
                    <h1 className="header-title font-weight-bolder text-center">Hospital Reviews</h1>
                </div>
                <div className="header-description">
                    The right place to tell the world how a hospital treated you.
                </div>
            </header>
            
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
        </aside>
    )
}

export default Sidebar
