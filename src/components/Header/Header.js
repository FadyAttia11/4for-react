import React from 'react'
import './Header.scss'
import { Link, useHistory } from 'react-router-dom'

const Header = () => {

    // //For Hamburger menu to work
    // const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger')
    // const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul')
    // const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a')
    // const header = document.querySelector('.header.container')

    // hamburger.addEventListener('click', () => {
    //     hamburger.classList.toggle('active')
    //     mobile_menu.classList.toggle('active')
    // })

    // document.addEventListener('scroll', () => {
    //     let scroll_position = window.scrollY;
    //     if(scroll_position > 250){
    //         header.style.backgroundColor = "#29323c"
    //     } else {
    //         header.style.backgroundColor = 'transparent'
    //     }
    // })

    // menu_item.forEach((item) => {
    //     item.addEventListener('click', () => {
    //         hamburger.classList.toggle('active')
    //         mobile_menu.classList.toggle('active')
    //     })
    // })
    // //End for Hamburger menu to work

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
                            <li><Link to="/https://fadyattia11.github.io/4for-react/">Home</Link></li>
                            <li><Link to="/https://fadyattia11.github.io/4for-react/services">Services</Link></li>
                            <li><Link to="/https://fadyattia11.github.io/4for-react/hire">Hire Us</Link></li>
                            <li><Link to="/https://fadyattia11.github.io/4for-react/plans">Plans & Pricing</Link></li>
                            <li><Link to="/https://fadyattia11.github.io/4for-react/about">About Me</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header