import React from 'react'
import './Header.scss'
import { Link, useHistory } from 'react-router-dom'

const Header = () => {

    

    return (
        <section id="header">
            <div className="header container">
                <div className="nav-bar">
                    <div className="brand">
                        <Link to="/"><h1><span>4</span>for</h1></Link>
                    </div>
                    <div className="nav-list">
                        <div className="hamburger"><div className="bar"></div></div>
                        <ul>
                            <li><Link to="/4for-react/">Home</Link></li>
                            <li><Link to="/4for-react/services">Services</Link></li>
                            <li><Link to="/4for-react/hire">Hire Us</Link></li>
                            <li><Link to="/4for-react/plans">Plans & Pricing</Link></li>
                            <li><Link to="/4for-react/about">About Me</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Header