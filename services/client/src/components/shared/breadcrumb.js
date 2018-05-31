import React, { Component } from "react";

class Breadcrumb extends Component {
    render() {
        return (
            <section className="parallax-section" data-scrollax-parent="true">
                <div
                    className="bg par-elem "
                    data-bg="images/bg/1.jpg"
                    data-scrollax="properties: { translateY: '30%' }"
                />
                <div className="overlay" />
                <div className="container">
                    <div className="section-title center-align">
                        <h2>
                            <span>Listings Without Map</span>
                        </h2>
                        <div className="breadcrumbs fl-wrap">
                            <a href="#">Home</a>
                            <a href="#">Listings</a>
                            <span>Listings Without Map</span>
                        </div>
                        <span className="section-separator" />
                    </div>
                </div>
                <div className="header-sec-link">
                    <div className="container">
                        <a href="#sec1" className="custom-scroll-link">
                            Let's Start
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Breadcrumb;
