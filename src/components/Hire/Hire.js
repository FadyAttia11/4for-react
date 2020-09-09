import React from 'react'
import './Hire.scss'
import { Link } from 'react-router-dom'

const Hire = () => {
    
    return (
        <section id="hire">
            <div class="hire container">
                <div class="hire-top">
                    <h1 class="section-title">Hire <span>us</span></h1>
                    <p>With us you will get the complete package of building your dream website, Save your time & energy, 
                        And just get one professional agency like us to get the entire job done for you with simple, 
                        clean and beautiful looking website designed just for your clients.</p>
                    <Link to="plans" class="cta">See available Plans & pricing</Link>
                </div>
                <div class="hire-bottom">
                    <div class="hire-item">
                        <div class="icon">
                            <img src="https://img.icons8.com/bubbles/100/000000/services.png"/>
                        </div>
                        <h2>UI & UX Design</h2>
                        <p>Design the User Interface & User Experience for your website for have astonishing look
                            for your website. with great overall experience for your users.
                        </p>
                    </div>
                    <div class="hire-item">
                        <div class="icon">
                            <img src="https://img.icons8.com/bubbles/100/000000/services.png"/>
                        </div>
                        <h2>Front-end Development</h2>
                        <p>Implement the designs with code to transform the designs from just some images, To be a live
                            web pages on the internet that you can visit or interact with.
                        </p>
                    </div>
                    <div class="hire-item">
                        <div class="icon">
                            <img src="https://img.icons8.com/bubbles/100/000000/services.png"/>
                        </div>
                        <h2>Back-end Development</h2>
                        <p>establish a web server for your website. to make the server-side requests and to be able to 
                            interact with the database of your users & data of your website.
                        </p>
                    </div>
                    <div class="hire-item">
                        <div class="icon">
                            <img src="https://img.icons8.com/bubbles/100/000000/services.png"/>
                        </div>
                        <h2>Database management</h2>
                        <p>Create your own database & manage how you can add, find, edit or delete users & data from 
                            your website to complete building your business website.
                        </p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Hire