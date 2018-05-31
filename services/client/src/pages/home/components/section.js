import React, { Component } from "react";

import EventCampaign from "./EventCampaign";

class Section extends Component {
    constructor(props) {
        const data = [
            {
                title: "Corporate Events",
                description: "",
                image: ""
            }
        ];

        super(props);
        this.state = {
            events: data
        };
    }

    render() {
        return (
            <section className="section how-to">
                <div className="container">
                    <h1 className="title">Our Event Types</h1>
                    <br />
                    <br />
                    <br />

                    <div className="content is-mobile is-12">
                        <div className="tile is-ancestor">
                            <div className="tile is-vertical">
                                <div className="tile">
                                    <div className="tile is-parent is-vertical is-4">
                                        <EventCampaign
                                            title={"  Corporate Events"}
                                            description={
                                                "Beautiful spacious event rooms and specially equipped media rooms; perfect for all corporate events of all sizes."
                                            }
                                            image={
                                                "https://images.pexels.com/photos/301930/pexels-photo-301930.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
                                            }
                                        />

                                        <EventCampaign
                                            title={"Private Parties"}
                                            description={
                                                "Christenings, graduations and birthday parties to lavish anniversary celebrations, intimate family gatherings."
                                            }
                                            image={
                                                "https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
                                            }
                                        />

                                        <EventCampaign
                                            title={"Meetings"}
                                            description={
                                                "Intimate rooms for small groups, to sophisticated boardrooms for key corporate occasions."
                                            }
                                            image={
                                                "https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
                                            }
                                        />
                                    </div>

                                    <div className="tile is-parent is-vertical is-4">
                                        <EventCampaign
                                            title={"Private Dinners"}
                                            description={
                                                "Fine dining experiences can be hosted in one of many smaller, medium, or large private rooms."
                                            }
                                            image={
                                                "https://images.pexels.com/photos/6270/woman-flowers-holidays-girl-6270.jpg?w=1260&h=750&auto=compress&cs=tinysrgb"
                                            }
                                        />

                                        <EventCampaign
                                            title={"Weddings"}
                                            description={
                                                "Discover unique wedding venues tailored to your price, location and capacity"
                                            }
                                            image={
                                                "https://images.pexels.com/photos/169191/pexels-photo-169191.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
                                            }
                                        />

                                        <EventCampaign
                                            title={"Conferences"}
                                            description={
                                                "Professional conference rooms, and exceptional venues"
                                            }
                                            image={
                                                "https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?w=1260&h=750&auto=compress&cs=tinysrgb"
                                            }
                                        />
                                    </div>

                                    <div className="tile is-parent is-vertical is-4">
                                        <EventCampaign
                                            title={"Product Launch"}
                                            description={
                                                "Find the perfect venue, set the atmosphere, and launch your product to potential investors."
                                            }
                                            image={
                                                "https://images.pexels.com/photos/5956/gift-brown-shopping-market.jpg?w=1260&h=750&auto=compress&cs=tinysrgb"
                                            }
                                        />

                                        <EventCampaign
                                            title={"Ticketed Events"}
                                            description={
                                                "Fully managed ticketed events in the ideal venue for your event."
                                            }
                                            image={
                                                "https://images.pexels.com/photos/196652/pexels-photo-196652.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
                                            }
                                        />

                                        <EventCampaign
                                            title={"Christmas Parties"}
                                            description={
                                                "A wide range of entertainment and unique performances; something for everyone this festive period"
                                            }
                                            image={
                                                "https://images.pexels.com/photos/6289/lights-night-alcohol-party.jpg?w=1260&h=750&auto=compress&cs=tinysrgb"
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Section;
