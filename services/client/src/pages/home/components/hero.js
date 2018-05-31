import React, { Component } from "react";

import bg1 from "images/bg/1.jpg";

class Hero extends Component {
    render() {
        return (
            <section className="hero-section no-dadding" id="sec1">
                <div className="slider-container-wrap fl-wrap">
                    <div className="slider-container">
                        <div className="slider-item fl-wrap">
                            <div className="bg" data-bg={bg1} />
                            <div className="overlay" />
                            <div className="hero-section-wrap fl-wrap">
                                <div className="container">
                                    <div className="intro-item fl-wrap">
                                        <h2>
                                            Find your perfect venue for every
                                            occasion
                                        </h2>
                                        <h3>
                                            Discover great locations, hotels,
                                            restaurants, and more.
                                        </h3>
                                    </div>
                                    <div className="main-search-input-wrap">
                                        <div className="main-search-input fl-wrap">
                                            <div className="main-search-input-item">
                                                <input
                                                    type="text"
                                                    placeholder="What are you looking for?"
                                                    value=""
                                                />
                                            </div>
                                            <div className="main-search-input-item location">
                                                <input
                                                    type="text"
                                                    placeholder="Location"
                                                    value=""
                                                />
                                                <a href="#">
                                                    <i className="fa fa-dot-circle-o" />
                                                </a>
                                            </div>
                                            <button className="main-search-button">
                                                Search
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;
