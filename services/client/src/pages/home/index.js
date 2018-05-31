import React, { Component } from "react";

import Header from "components/layout/header";
import Footer from "components/layout/footer";

import Featured from "./components/featured";
import Community from "./components/community";
import Tutorial from "./components/tutorial";
import Promo from "./components/promo";
import Pricing from "./components/pricing";
import Question from "./components/question";
import Hero from "./components/hero";

class HomePage extends Component {
    render() {
        const { dispatch, isAuthenticated } = this.props;

        return (
            <div>
                <div id="main">
                    <Header {...this.props} />

                    <div id="wrapper">
                        <div className="content">
                            <Hero />

                            <Featured />

                            <Community />

                            <Tutorial />

                            <Promo />

                            <Pricing />

                            <Question />
                        </div>
                    </div>

                    <Footer />

                    <a className="to-top">
                        <i className="fa fa-angle-up" />
                    </a>
                </div>
            </div>
        );
    }
}

export default HomePage;
