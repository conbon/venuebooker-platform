import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "images/logo.png";

import LoginForm from "./loginform";
import RegisterForm from "./registerform";
import { logoutUser } from "actions/logout";

import Pane from "./pane";
import Tabs from "./tabs";

import Logout from "./logout";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            showUserMenu: false
        };
    }

    handleClick = e => {
        e.preventDefault();
        this.setState({
            show: !this.state.show
        });
    };

    handleUserMenuDropdown = e => {
        e.preventDefault();
        this.setState({
            showUserMenu: !this.state.showUserMenu
        });
    };

    renderModal() {
        return (
            <div className="main-register-wrap modal">
                <div className="main-overlay" />
                <div className="main-register-holder">
                    <div className="main-register fl-wrap">
                        <div className="close-reg" onClick={this.handleClick}>
                            <i className="fa fa-times" />
                        </div>
                        <h3>
                            Sign In
                            <span>
                                &nbsp;Venue<strong>Booker</strong>
                            </span>
                        </h3>

                        <Tabs id="tabs-container" selected={0}>
                            <Pane label="Login">
                                <div id="tab-1" className="tab-content">
                                    <LoginForm {...this.props} />
                                </div>
                            </Pane>
                            <Pane label="Register">
                                <div id="tab-1" className="tab-content">
                                    <RegisterForm />
                                </div>
                            </Pane>
                        </Tabs>
                    </div>
                </div>
            </div>
        );
    }

    renderSignin() {
        return (
            <div
                className="show-reg-form modal-open"
                onClick={this.handleClick}
            >
                <i className="fa fa-sign-in" />Sign In
            </div>
        );
    }

    renderUserMenu() {
        const { dispatch } = this.props;

        return (
            <ul>
                <li>
                    <Link to="/profile">Edit profile</Link>
                </li>
                <li>
                    <a href="dashboard-add-listing.html">Add Listing</a>
                </li>
                <li>
                    <Link to="/profile">Bookings</Link>
                </li>
                <li>
                    <Link to="/profile">Reviews</Link>
                </li>
                <li>
                    <Logout onLogoutClick={() => dispatch(logoutUser())} />
                </li>
            </ul>
        );
    }

    renderUser() {
        const menu = this.state.showUserMenu ? this.renderUserMenu() : null;

        return (
            <div className="header-user-menu">
                <div
                    className="header-user-name"
                    onClick={this.handleUserMenuDropdown}
                >
                    <Link to="/profile" style={{ position: "initial" }}>
                        <span>
                            <img
                                src="https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/1455115_10153441244790459_1787397019_n.jpg?oh=bc43967651e9dc8288e9b7666ca88dfe&oe=5B4594E3"
                                alt=""
                            />
                        </span>
                    </Link>
                    Hello , Kyle
                </div>

                {menu}
            </div>
        );
    }

    renderSignInUser() {
        return this.props.isAuthenticated
            ? this.renderUser()
            : this.renderSignin();
    }

    render() {
        const modal = this.state.show ? this.renderModal() : null;

        return (
            <div>
                <header className="main-header dark-header fs-header sticky">
                    <div className="header-inner">
                        <div className="logo-holder">
                            <a href="index.html">
                                <img src="" alt="" />
                            </a>
                        </div>
                        <div className="header-search vis-header-search">
                            <div className="header-search-input-item">
                                <input
                                    type="text"
                                    placeholder="Keywords"
                                    value=""
                                />
                            </div>
                            <button className="header-search-button">
                                Search
                            </button>
                        </div>
                        <div className="show-search-button">
                            <i className="fa fa-search" />
                            <span>Search</span>
                        </div>

                        <a
                            href="dashboard-add-listing.html"
                            className="add-list"
                        >
                            Add Listing
                            <span>
                                <i className="fa fa-plus" />
                            </span>
                        </a>

                        {this.renderSignInUser()}

                        <div className="nav-holder main-menu">
                            <nav>
                                <ul>
                                    <li>
                                        <Link
                                            to="/"
                                            className="nav-item is-tab"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/listing"
                                            className="nav-item is-tab"
                                        >
                                            Venues
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/listing"
                                            className="nav-item is-tab"
                                        >
                                            How it Works
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>

                {modal}
            </div>
        );
    }
}

export default Header;
