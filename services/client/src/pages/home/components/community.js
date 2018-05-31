import React, { Component } from "react";

import avatar from "images/avatar/1.jpg";

class Community extends Component {
    render() {
        return (
            <section className="color-bg">
                <div className="shapes-bg-big" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="images-collage fl-wrap">
                                <div className="images-collage-title">
                                    Venue<span>Booker</span>
                                </div>
                                <div className="images-collage-main images-collage-item">
                                    <img src={avatar} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="color-bg-text">
                                <h3>Join our online community</h3>
                                <p>
                                    In ut odio libero, at vulputate urna. Nulla
                                    tristique mi a massa convallis cursus. Nulla
                                    eu mi magna. Etiam suscipit commodo gravida.
                                    Lorem ipsum dolor sit amet, conse ctetuer
                                    adipiscing elit, sed diam nonu mmy nibh
                                    euismod tincidunt ut laoreet dolore magna
                                    aliquam erat.
                                </p>
                                <a
                                    href="#"
                                    className="color-bg-link modal-open"
                                >
                                    Sign In Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Community;
