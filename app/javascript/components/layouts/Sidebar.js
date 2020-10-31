import React from 'react'
import Icofont from 'react-icofont'
import Footer from './Footer'
import NavBar from './NavBar'
import './sidebar.scss'

const Sidebar = () => {
    return (
        <aside className="sidebar bg-default-blue col-sm-4 col-md-3 col-xl-2">
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
            
            <NavBar />

            <Footer />
        </aside>
    )
}

export default Sidebar
