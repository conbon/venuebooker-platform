import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuote, fetchSecretQuote } from "../actions/quotes";
import AuthBar from "../components/AuthBar";
import Quotes from "../components/Quotes";
import PropTypes from "prop-types";

import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "../pages/home";

class App extends Component {
    render() {
        const {
            dispatch,
            quote,
            isAuthenticated,
            errorMessage,
            isSecretQuote
        } = this.props;
        return (
            <div>
                <Router>
                    <div>
                        <Route
                            exact
                            path="/"
                            render={props => <HomePage {...this.props} />}
                        />
                    </div>
                </Router>
            </div>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    quote: PropTypes.string,
    isAuthenticated: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    isSecretQuote: PropTypes.bool.isRequired
};

// These props come from the application's
// state when it is started
function mapStateToProps(state) {
    const { quotes, auth } = state;
    const { quote, authenticated } = quotes;
    const { isAuthenticated, errorMessage } = auth;

    return {
        quote,
        isSecretQuote: authenticated,
        isAuthenticated,
        errorMessage
    };
}

export default connect(mapStateToProps)(App);
