import React, { Component } from "react";

import all from "images/all/1.jpg";

import Header from "components/layout/header";
import Footer from "components/layout/footer";

import Breadcrumb from "components/shared/breadcrumb";
import Community from "components/shared/community";

import Pagination from "./components/pagination";
import SearchResultHeader from "./components/search-result-header";
import ListSearchInput from "./components/list-search-input";
import ListItem from "./components/list-item";

import { listings } from "./data";
import { Link } from "react-router-dom";

class ListingPage extends Component {
    renderList() {
        return listings.map(function(el) {
            const {
                id,
                name,
                type,
                creator,
                description,
                reviews,
                address,
                image
            } = el;
            return (
                <ListItem
                    key={id}
                    id={id}
                    name={name}
                    type={type}
                    creator={creator}
                    description={description}
                    reviews={reviews}
                    address={address}
                    image={image}
                />
            );
        });
    }

    render() {
        return (
            <div>
                <div id="main">
                    <Header {...this.props} />

                    <div id="wrapper">
                        <div className="content">
                            <Breadcrumb />
                            <section
                                className="gray-bg no-pading no-top-padding"
                                id="sec1"
                            >
                                <div className="col-list-wrap fh-col-list-wrap  left-list">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <SearchResultHeader />
                                                <div className="list-main-wrap fl-wrap card-listing">
                                                    {this.renderList()}

                                                    <Pagination />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="fl-wrap">
                                                    <ListSearchInput />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div className="limit-box fl-wrap" />

                            <Community />
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

export default ListingPage;
