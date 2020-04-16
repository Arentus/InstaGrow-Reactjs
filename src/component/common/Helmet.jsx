import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} | Skyrocket your sales even during the recession! Let us handle your growth. </title>
                    <meta name="description" content="Insta Grow – Skyrocket your sales even during the recession! Let us handle your growth." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
