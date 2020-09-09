import React from 'react'
import './Contact.scss'

const Contact = () => {
    
    return (
        <section id="contact">
            <div class="contact container">
                <div><h1 class="section-title">Contact <span>info</span></h1></div>
                <div class="contact-items">
                    <div class="contact-item">
                        <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png"/></div>
                        <div class="contact-info">
                            <h1>Phone</h1>
                            <h2>0109 398 1094</h2>
                            <h2>0122 956 5721</h2>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="icon"><img src="https://img.icons8.com/dusk/100/000000/social-network.png"/></div>
                        <div class="contact-info">
                            <h1>Social Media</h1>
                            <h2><a href="https://www.linkedin.com/in/fady-attia-01/" target="_blank">Linkedin</a></h2>
                            <h2><a href="https://github.com/FadyAttia11" target="_blank">Github</a></h2>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png"/></div>
                        <div class="contact-info">
                            <h1>Email</h1>
                            <h2>fadyattia11@gmail.com</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact