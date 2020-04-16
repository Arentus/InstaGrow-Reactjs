import React, { Component } from "react";

const ServiceList = [
    {
        icon: '01',
        title: 'Business Strategy',
        description: 'Let us develop a complete business strategy for your website and outgrow your competitors with our 100% Niche targeting growth  make sure your business stands apart.'
    },
    {
        icon: '02',
        title: 'Marketing and Analytics',
        description: 'Stay 100% updated with our bi-weekly analytics about your Instagram page and website. Complete graphic Illustration of growth so you can be rest assured about your growth.'
    },
    {
        icon: '03',
        title: 'Website/Instagram Audit',
        description: 'We will do a complete audit on your website and page to custom tailor plans for you to grow.'
    },
]

class ServiceOne extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceList.map( (val , i) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                            <div className="service service__style--1">
                                <div className="icon">
                                    <img src={`/assets/images/icons/icon-${val.icon}.png`} alt="Digital Agency"/>
                                </div>
                                <div className="content">
                                    <h4 className="title">{val.title}</h4>
                                    <p>{val.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceOne;