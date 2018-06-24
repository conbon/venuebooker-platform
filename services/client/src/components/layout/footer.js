import React, { Component } from "react";

import logo from "images/logo.png";
import all from "images/all/1.jpg";

class Footer extends Component {
    render() {
        return (
            <footer className="dark-footer  ">
                <div className="sub-footer fl-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="about-widget">
                                    <img src={logo} alt="" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="copyright">
                                    {" "}
                                    &#169; CityBook 2018 . All rights reserved.
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="footer-social">
                                    <ul>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fa fa-facebook-official" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fa fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fa fa-chrome" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fa fa-vk" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fa fa-whatsapp" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
