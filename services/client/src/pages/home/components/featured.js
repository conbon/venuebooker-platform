import React, { Component } from "react";

import { Link } from "react-router-dom";

import cafeImage from "images/homepage/cafe.jpg";
import conferenceImage from "images/homepage/conference.jpg";
import gymImage from "images/homepage/gym.jpg";
import hotelImage from "images/homepage/hotel.jpg";
import shopImage from "images/homepage/shop.jpg";

class Featured extends Component {
    render() {
        return (
            <section id="sec2">
                <div className="container">
                    <div className="section-title">
                        <h2>Featured Categories</h2>
                        <div className="section-subtitle">
                            Catalog of Categories
                        </div>
                        <span className="section-separator" />
                        <p>
                            Explore some of the best tips from around the city
                            from our partners and friends.
                        </p>
                    </div>
                    <div className="gallery-items fl-wrap mr-bot spad">
                        <div className="gallery-item">
                            <div className="grid-item-holder">
                                <div className="listing-item-grid">
                                    <img src={conferenceImage} alt="" />
                                    <div className="listing-counter">
                                        <span>10 </span> Locations
                                    </div>
                                    <div className="listing-item-cat">
                                        <h3>
                                            <a href="listing.html">
                                                Conference and Event
                                            </a>
                                        </h3>
                                        <p>
                                            Constant care and attention to the
                                            patients makes good record
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-item gallery-item-second">
                            <div className="grid-item-holder">
                                <div className="listing-item-grid">
                                    <img src={cafeImage} alt="" />
                                    <div className="listing-counter">
                                        <span>6 </span> Locations
                                    </div>
                                    <div className="listing-item-cat">
                                        <h3>
                                            <a href="listing.html">
                                                Cafe - Pub
                                            </a>
                                        </h3>
                                        <p>
                                            Constant care and attention to the
                                            patients makes good record
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-item">
                            <div className="grid-item-holder">
                                <div className="listing-item-grid">
                                    <img src={gymImage} alt="" />
                                    <div className="listing-counter">
                                        <span>21 </span> Locations
                                    </div>
                                    <div className="listing-item-cat">
                                        <h3>
                                            <a href="listing.html">
                                                Gym - Fitness
                                            </a>
                                        </h3>
                                        <p>
                                            Constant care and attention to the
                                            patients makes good record
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-item">
                            <div className="grid-item-holder">
                                <div className="listing-item-grid">
                                    <img src={hotelImage} alt="" />
                                    <div className="listing-counter">
                                        <span>7 </span> Locations
                                    </div>
                                    <div className="listing-item-cat">
                                        <h3>
                                            <a href="listing.html">Hotels</a>
                                        </h3>
                                        <p>
                                            Constant care and attention to the
                                            patients makes good record
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-item">
                            <div className="grid-item-holder">
                                <div className="listing-item-grid">
                                    <img src={shopImage} alt="" />
                                    <div className="listing-counter">
                                        <span>15 </span> Locations
                                    </div>
                                    <div className="listing-item-cat">
                                        <h3>
                                            <a href="listing.html">
                                                Shop - Store
                                            </a>
                                        </h3>
                                        <p>
                                            Constant care and attention to the
                                            patients makes good record
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link
                        to="/listing"
                        className="btn big-btn circle-btn dec-btn color-bg flat-btn"
                    >
                        View All <i className="fa fa-eye" />
                    </Link>
                </div>
            </section>
        );
    }
}

export default Featured;
