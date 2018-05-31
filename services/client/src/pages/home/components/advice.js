import React, { Component } from "react";

import all from "images/all/1.jpg";
import avatar from "images/avatar/1.jpg";

class Advice extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <div className="section-title">
                        <h2>Tips & Articles</h2>
                        <div className="section-subtitle">From the blog.</div>
                        <span className="section-separator" />
                        <p>Browse the latest articles from our blog.</p>
                    </div>
                    <div className="row home-posts">
                        <div className="col-md-4">
                            <article className="card-post">
                                <div className="card-post-img fl-wrap">
                                    <a href="blog-single.html">
                                        <img src={all} alt="" />
                                    </a>
                                </div>
                                <div className="card-post-content fl-wrap">
                                    <h3>
                                        <a href="blog-single.html">
                                            Gallery Post
                                        </a>
                                    </h3>
                                    <p>
                                        In ut odio libero, at vulputate urna.
                                        Nulla tristique mi a massa convallis
                                        cursus. Nulla eu mi magna. Etiam
                                        suscipit commodo gravida.{" "}
                                    </p>
                                    <div className="post-author">
                                        <a href="#">
                                            <img src={avatar} alt="" />
                                            <span>By , Alisa Noory</span>
                                        </a>
                                    </div>
                                    <div className="post-opt">
                                        <ul>
                                            <li>
                                                <i className="fa fa-calendar-check-o" />{" "}
                                                <span>25 April 2018</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-eye" />{" "}
                                                <span>264</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-tags" />{" "}
                                                <a href="#">Photography</a>{" "}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-md-4">
                            <article className="card-post">
                                <div className="card-post-img fl-wrap">
                                    <a href="blog-single.html">
                                        <img src={all} alt="" />
                                    </a>
                                </div>
                                <div className="card-post-content fl-wrap">
                                    <h3>
                                        <a href="blog-single.html">
                                            Video and gallery post
                                        </a>
                                    </h3>
                                    <p>
                                        In ut odio libero, at vulputate urna.
                                        Nulla tristique mi a massa convallis
                                        cursus. Nulla eu mi magna. Etiam
                                        suscipit commodo gravida.{" "}
                                    </p>
                                    <div className="post-author">
                                        <a href="#">
                                            <img src={avatar} alt="" />
                                            <span>By , Mery Lynn</span>
                                        </a>
                                    </div>
                                    <div className="post-opt">
                                        <ul>
                                            <li>
                                                <i className="fa fa-calendar-check-o" />{" "}
                                                <span>25 April 2018</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-eye" />{" "}
                                                <span>264</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-tags" />{" "}
                                                <a href="#">Design</a>{" "}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-md-4">
                            <article className="card-post">
                                <div className="card-post-img fl-wrap">
                                    <a href="blog-single.html">
                                        <img src={all} alt="" />
                                    </a>
                                </div>
                                <div className="card-post-content fl-wrap">
                                    <h3>
                                        <a href="blog-single.html">
                                            Post Article
                                        </a>
                                    </h3>
                                    <p>
                                        In ut odio libero, at vulputate urna.
                                        Nulla tristique mi a massa convallis
                                        cursus. Nulla eu mi magna. Etiam
                                        suscipit commodo gravida.{" "}
                                    </p>
                                    <div className="post-author">
                                        <a href="#">
                                            <img src={avatar} alt="" />
                                            <span>By , Garry Dee</span>
                                        </a>
                                    </div>
                                    <div className="post-opt">
                                        <ul>
                                            <li>
                                                <i className="fa fa-calendar-check-o" />{" "}
                                                <span>25 April 2018</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-eye" />{" "}
                                                <span>264</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-tags" />{" "}
                                                <a href="#">Stories</a>{" "}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                    <a
                        href="blog.html"
                        className="btn  big-btn circle-btn  dec-btn color-bg flat-btn"
                    >
                        Read All<i className="fa fa-eye" />
                    </a>
                </div>
            </section>
        );
    }
}

export default Advice;
