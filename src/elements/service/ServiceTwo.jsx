import React, { Component } from "react";
import { FiCast, FiLayers, FiUsers, FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Instagram Growth',
        description: 'Instagram is the fastest growing Social network out there, with the rising competition, take your business one step ahead with our Instagram account growth service, get 100% relevant growth and target your competitors and potential clients!s'
    },
    {
        icon: <FiLayers />,
        title: 'Paid Advertisement',
        description: 'Is setting up facebook pixel too complicated for you, or are you tired of pressing boosting posts but receiving no results whatsoever? Out source your advertisement management to us and get a promising ROAS'
    },
    {
        icon: <FiUsers />,
        title: 'SEO',
        description: 'Rank ahead of your competitors with our 100% white hat SEO strategies, keep track of your website rankings with our tools and watch us bring your website to top on multiple search engines!'
    },
    {
        icon: <FiMonitor />,
        title: 'Audit',
        description: 'Hire us to do a complete Audit of your website  to know where your business stands in comparison to relevant competition.'
    }
]

class ServiceTwo extends Component {
    render() {
        let title = 'Services',
            description = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.';
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                            <h2 className="title">{title}</h2>
                            
                            
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 mt_md--50">
                        <div className="row service-one-wrapper">
                            {ServiceList.map((val, i) => (
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                    <div>
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceTwo;
