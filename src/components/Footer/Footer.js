import React from 'react'
import './Footer.scss'

const Footer = () => {
    
    return (
        <section id="footer">
            <div class="footer container">
                <div class="brand"><h1><span>f</span>ady <span>a</span>ttia</h1></div>
                <h2>Your Complete Web Solution</h2>
                <div class="social-icon">
                    <div class="social-item">
                        <a href="https://www.facebook.com/Fady.Attia1/" target="_blank">
                            <img src="https://img.icons8.com/color/48/000000/facebook-new.png"/>
                        </a>
                    </div>
                    <div class="social-item">
                        <a href="https://twitter.com/FadyAttia12" target="_blank">
                            <img src="https://img.icons8.com/color/48/000000/twitter-circled.png"/>
                        </a>
                    </div>
                    <div class="social-item">
                        <a href="https://www.linkedin.com/in/fady-attia-01/" target="_blank">
                            <img src="https://img.icons8.com/color/48/000000/linkedin-circled.png"/>
                        </a>
                    </div>
                    <div class="social-item">
                        <a href="https://github.com/FadyAttia11" target="_blank">
                            <img src="https://img.icons8.com/color/48/000000/github--v1.png"/>
                        </a>
                    </div> 
                </div>
                <p>Copyright © 2020 Fady. All rights reserved</p>
            </div>
        </section>
    )
}

export default Footer