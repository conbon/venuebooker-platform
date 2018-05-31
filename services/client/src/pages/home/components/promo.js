import React, { Component } from "react";

class Promo extends Component {
    render() {
        return (
            <section className="parallax-section" data-scrollax-parent="true">
                <div
                    className="bg"
                    data-scrollax="properties: { translateY: '100px' }"
                />
                <div className="overlay co lor-overlay" />
                <div className="container">
                    <div className="intro-item fl-wrap">
                        <h2>Visit the Best Places In Your City</h2>
                        <h3>
                            Find great places , hotels , restourants , shops.
                        </h3>
                        <a className="trs-btn" href="#">
                            Add Listing +{" "}
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Promo;
