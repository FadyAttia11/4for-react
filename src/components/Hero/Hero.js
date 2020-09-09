import React from 'react'
import './Hero.scss'
import { Link } from 'react-router-dom'

const Hero = () => {
    
    return (
        <section id="hero">
            <div className="hero container">
                <div>
                    <h1>GET All</h1>
                    <h1>Services You Hope</h1>
                    <h1><span>4</span>FOR</h1>
                    <Link to="services" type="button" className="cta">Services</Link>
                </div>
            </div>
        </section>
    )
}

export default Hero