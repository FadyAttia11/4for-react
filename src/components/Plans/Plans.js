import React from 'react'
import './Plans.scss'

const Plans = () => {
    
    return (
        <section id="plans">
            <div class="plans container">
                <h1 class="section-title">Plans <span>&</span> Pricing</h1>
                <div className="pricing-table">
                    <div className="pricing-card">
                        <h3 className="pricing-card-header">Personal</h3>
                        <div className="price"><sup>$</sup>15<span>/MO</span></div>
                        <ul>
                            <li><strong>3</strong> Websites</li>
                            <li><strong>20 GB</strong> SSD</li>
                            <li><strong>1</strong> Domain Name</li>
                            <li><strong>5</strong> Email</li>
                            <li><strong>1x</strong> CPU & RAM</li>
                        </ul>
                        <a href="#" className="order-btn">Order Now</a>
                    </div>

                    <div className="pricing-card">
                        <h3 className="pricing-card-header">Professional</h3>
                        <div className="price"><sup>$</sup>30<span>/MO</span></div>
                        <ul>
                            <li><strong>30</strong> Websites</li>
                            <li><strong>50 GB</strong> SSD</li>
                            <li><strong>1</strong> Domain Name</li>
                            <li><strong>20</strong> Email</li>
                            <li><strong>1.5x</strong> CPU & RAM</li>
                        </ul>
                        <a href="#" className="order-btn">Order Now</a>
                    </div>

                    <div className="pricing-card">
                        <h3 className="pricing-card-header">Premium</h3>
                        <div className="price"><sup>$</sup>50<span>/MO</span></div>
                        <ul>
                            <li><strong>30</strong> Websites</li>
                            <li><strong>150 GB</strong> SSD</li>
                            <li><strong>1</strong> Domain Name</li>
                            <li><strong>40</strong> Email</li>
                            <li><strong>2x</strong> CPU & RAM</li>
                        </ul>
                        <a href="#" className="order-btn">Order Now</a>
                    </div>

                    <div className="pricing-card">
                        <h3 className="pricing-card-header">Ultimate</h3>
                        <div className="price"><sup>$</sup>80<span>/MO</span></div>
                        <ul>
                            <li><strong>100</strong> Websites</li>
                            <li><strong>500 GB</strong> SSD</li>
                            <li><strong>1</strong> Domain Name</li>
                            <li><strong>100</strong> Email</li>
                            <li><strong>4x</strong> CPU & RAM</li>
                        </ul>
                        <a href="#" className="order-btn">Order Now</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Plans