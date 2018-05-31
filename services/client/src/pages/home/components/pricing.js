import React, { Component } from "react";

class Pricing extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <div className="section-title">
                        <h2> Pricing Tables</h2>
                        <div className="section-subtitle">
                            cost of our services
                        </div>
                        <span className="section-separator" />
                        <p>
                            Explore some of the best tips from around the city
                            from our partners and friends.
                        </p>
                    </div>
                    <div className="pricing-wrap fl-wrap">
                        <div className="price-item">
                            <div className="price-head op1">
                                <h3>Basic</h3>
                            </div>
                            <div className="price-content fl-wrap">
                                <div className="price-num fl-wrap">
                                    <span className="curen">£</span>
                                    <span className="price-num-item">30</span>
                                    <div className="price-num-desc">
                                        Per month
                                    </div>
                                </div>
                                <div className="price-desc fl-wrap">
                                    <ul>
                                        <li>One Listing</li>
                                        <li>90 Days Availability</li>
                                        <li>Non-Featured</li>
                                        <li>Limited Support</li>
                                    </ul>
                                    <a href="#" className="price-link">
                                        Choose Basic
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="price-item best-price">
                            <div className="price-head op2">
                                <h3>Extended</h3>
                            </div>
                            <div className="price-content fl-wrap">
                                <div className="price-num fl-wrap">
                                    <span className="curen">£</span>
                                    <span className="price-num-item">60</span>
                                    <div className="price-num-desc">
                                        Per month
                                    </div>
                                </div>
                                <div className="price-desc fl-wrap">
                                    <ul>
                                        <li>Ten Listings</li>
                                        <li>Lifetime Availability</li>
                                        <li>Featured In Search Results</li>
                                        <li>24/7 Support</li>
                                    </ul>
                                    <a href="#" className="price-link">
                                        Choose Extended
                                    </a>
                                    <div className="recomm-price">
                                        <i className="fa fa-check" />
                                        <span className="clearfix" />
                                        Recommended
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="price-item">
                            <div className="price-head">
                                <h3>Professional</h3>
                            </div>
                            <div className="price-content fl-wrap">
                                <div className="price-num fl-wrap">
                                    <span className="curen">£</span>
                                    <span className="price-num-item">90</span>
                                    <div className="price-num-desc">
                                        Per month
                                    </div>
                                </div>
                                <div className="price-desc fl-wrap">
                                    <ul>
                                        <li>Unlimited Listings</li>
                                        <li>Lifetime Availability</li>
                                        <li>Featured In Search Results</li>
                                        <li>24/7 Support</li>
                                    </ul>
                                    <a href="#" className="price-link">
                                        Choose Professional
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Pricing;
