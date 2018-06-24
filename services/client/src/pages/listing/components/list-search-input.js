import React, { Component } from "react";

class ListSearchInput extends Component {
    render() {
        return (
            <div className="listsearch-input-wrap fl-wrap">
                <div className="listsearch-input-item">
                    <i className="mbri-key single-i" />
                    <input type="text" placeholder="Keywords?" value="" />
                </div>
                <div className="listsearch-input-item">
                    <select
                        data-placeholder="Location"
                        className="chosen-select"
                    >
                        <option>All Locations</option>
                        <option>Bronx</option>
                        <option>Brooklyn</option>
                        <option>Manhattan</option>
                        <option>Queens</option>
                        <option>Staten Island</option>
                    </select>
                </div>
                <div className="listsearch-input-item">
                    <select
                        data-placeholder="All Categories"
                        className="chosen-select"
                    >
                        <option>All Categories</option>
                        <option>Shops</option>
                        <option>Hotels</option>
                        <option>Restaurants</option>
                        <option>Fitness</option>
                        <option>Events</option>
                    </select>
                </div>
                <div className="listsearch-input-text">
                    <label>
                        <i className="mbri-map-pin" />
                        Enter Addres
                    </label>
                    <input
                        type="text"
                        placeholder="Destination , Area , Street"
                        className="qodef-archive-places-search"
                        value=""
                    />
                    <span className="loc-act qodef-archive-current-location">
                        <i className="fa fa-dot-circle-o" />
                    </span>
                </div>
                <div className="distance-input fl-wrap">
                    <div className="distance-title">
                        Radius around selected destination
                        <span />
                        km
                    </div>
                    <div className="distance-radius-wrap fl-wrap">
                        <input
                            className="distance-radius rangeslider--horizontal"
                            type="range"
                            min="1"
                            max="100"
                            step="1"
                            value="1"
                            data-title="Radius around selected destination"
                        />
                    </div>
                </div>

                <div className=" fl-wrap filter-tags">
                    <h4>Filter by Tags</h4>
                    <div className="filter-tags-wrap">
                        <input id="check-a" type="checkbox" name="check" />
                        <label for="check-a">Elevator in building</label>
                    </div>
                    <div className="filter-tags-wrap">
                        <input id="check-b" type="checkbox" name="check" />
                        <label for="check-b">Friendly workspace</label>
                    </div>
                    <div className="filter-tags-wrap">
                        <input id="check-c" type="checkbox" name="check" />
                        <label for="check-c">Instant Book</label>
                    </div>
                    <div className="filter-tags-wrap">
                        <input id="check-d" type="checkbox" name="check" />
                        <label for="check-d">Wireless Internet</label>
                    </div>
                </div>

                <button className="button fs-map-btn">Update</button>
            </div>
        );
    }
}

export default ListSearchInput;
