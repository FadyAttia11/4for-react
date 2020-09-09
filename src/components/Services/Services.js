import React from 'react'
import './Services.scss'
import Places from '../../img/4places.jpg'
import Shopping from '../../img/4shopping.jpg'
import Jobs from '../../img/4jobs.jpg'
import Movies from '../../img/4movies.jpg'

const Services = () => {
    
    return (
        <section id="services">
            <div class="services container">
                <div class="services-header">
                    <h1 class="section-title">Serv<span>i</span>ces</h1>
                </div>
                <div class="all-services">
                    <div class="service-item">
                        <div class="service-info">
                            <h1><span>4</span>Places</h1>
                            <h2>Coming Soon</h2>
                            <p>A website where you can discover new places that other people have recommended 
                                in your city or in the city you intend to visit with the ability to sort and find by specific 
                                category, price range, and best time to visit in year, and also you can be part of our team
                                and start adding places that you find worth recommending to other people. </p>
                        </div>
                        <div class="service-img">
                            <img src={Places}></img>
                        </div>
                    </div>
                    <div class="service-item">
                        <div class="service-info">
                            <h1><span>4</span>Shopping</h1>
                            <h2>Coming Soon</h2>
                            <p>A website where you can search for stuff you want to buy, and buy it directly through 
                                the website or by contacting the owner of it, You can buy new or used things, You can pay 
                                with your credit card or paypal account, And you can rate or see the rating of a product
                                or a seller. You also able to make an account as a seller and start your business.
                            </p>
                        </div>
                        <div class="service-img">
                            <img src={Shopping}></img>
                        </div>
                    </div>
                    <div class="service-item">
                        <div class="service-info">
                            <h1><span>4</span>Jobs</h1>
                            <h2>Coming Soon</h2>
                            <p>The Best way of finding the job that fits your skills. just make an account, add your 
                                experiences & skills, upload your resume. and start applying for jobs posted from the
                                companies in your country. you can also write posts about your current projects or work
                                you are doing to boost your opportunities.
                            </p>
                        </div>
                        <div class="service-img">
                            <img src={Jobs}></img>
                        </div>
                    </div>
                    <div class="service-item">
                        <div class="service-info">
                            <h1><span>4</span>Movies</h1>
                            <h2>Coming Soon</h2>
                            <p>A website where you can find out about Movies in cinemas, Movies with high ratings, 
                                Movies by a specific category, or Movies from a specific country. You can also add a review 
                                for a movie that you have seen. And you can make a list of your favourite or must-to-watch 
                                movies for other people to see. </p>
                        </div>
                        <div class="service-img">
                            <img src={Movies}></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services