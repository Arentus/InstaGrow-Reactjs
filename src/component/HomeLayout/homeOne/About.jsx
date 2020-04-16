import React, { Component } from "react";

class About extends Component {
    render() {
        let title = 'About',
            description = 'Been working as a freelancer for about 4 years, I and my team decided to start up our own Social media agency, having managed countless social media accounts and done hundreds of white hat SEO together, it was time to take this one step further.';
        return (
            <React.Fragment>
                <div id="about" className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-5 col-md-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/1.jpg" alt="About Images" />
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">{title}</h2>
                                        <p className="description">{description}</p>
                                    </div>
                                    <div className="row mt--30 mt_sm--10">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h3 className="title">Who we are</h3>
                                                <p>Team of Skilled professionals across the globe, with over 4 years of experience in growing businesses and revenues. Our team intends to help small businesses in affordable rates to grow.
                                                Our margins are low, so our customers can get maximum return on their investments.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default About;