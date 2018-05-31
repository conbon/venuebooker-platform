import React, { Component } from "react";

class Community extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <div className="section-title">
                        <h2>How it works</h2>
                        <div className="section-subtitle">
                            Discover & Connect{" "}
                        </div>
                        <span className="section-separator" />
                        <p>
                            Explore some of the best tips from around the world.
                        </p>
                    </div>
                    <div className="process-wrap fl-wrap">
                        <ul>
                            <li>
                                <div className="process-item">
                                    <span className="process-count">01 . </span>
                                    <div className="time-line-icon">
                                        <i className="fa fa-map-o" />
                                    </div>
                                    <h4> Find Interesting Place</h4>
                                    <p>
                                        Proin dapibus nisl ornare diam varius
                                        tempus. Aenean a quam luctus, finibus
                                        tellus ut, convallis eros sollicitudin
                                        turpis.
                                    </p>
                                </div>
                                <span className="pr-dec" />
                            </li>
                            <li>
                                <div className="process-item">
                                    <span className="process-count">02 .</span>
                                    <div className="time-line-icon">
                                        <i className="fa fa-envelope-open-o" />
                                    </div>
                                    <h4> Contact a Few Owners</h4>
                                    <p>
                                        Faucibus ante, in porttitor tellus
                                        blandit et. Phasellus tincidunt metus
                                        lectus sollicitudin feugiat pharetra
                                        consectetur.
                                    </p>
                                </div>
                                <span className="pr-dec" />
                            </li>
                            <li>
                                <div className="process-item">
                                    <span className="process-count">03 .</span>
                                    <div className="time-line-icon">
                                        <i className="fa fa-hand-peace-o" />
                                    </div>
                                    <h4> Make a Listing</h4>
                                    <p>
                                        Maecenas pulvinar, risus in facilisis
                                        dignissim, quam nisi hendrerit nulla, id
                                        vestibulum metus nullam viverra porta.
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <div className="process-end">
                            <i className="fa fa-check" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Community;
