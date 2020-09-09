import React from 'react'
import './About.scss'
import Personal from '../../img/personal-img.jpg'
import Contact from '../Contact/Contact'

const About = () => {
    
    return (
        <div>
            <section id="about">
                <div className="about container">
                    <div className="col-left">
                        <div className="about-img">
                            <img src={Personal}></img>
                        </div>
                    </div>
                    <div className="col-right">
                        <h1 className="section-title">About <span>me</span></h1>
                        <h2>Full Stack Web Developer</h2>
                        <p>Building Websites is my favourite hobby. if you are looking for a website for your business and you 
                            just don't want to be overwhelmed by hiring different designers & developers to make the enitre 
                            website for you. You can just hire us to get the entire job done for you with great eye on details.
                            Also you can have us build a specific part of your website, Or add a specific feature to your 
                            current business website.
                        </p>
                        <a href="https://www.docdroid.net/MHqHu7y/fady-attia-cv-pdf" target="_blank" className="cta">Download Resume</a>
                    </div>
                </div>
            </section>

            <Contact />
        </div>
            
    )
}

export default About