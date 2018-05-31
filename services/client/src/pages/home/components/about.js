import React, { Component } from "react";
import CardList from "./CardList";

const cards = [
    {
        key: 1,
        id: 1,
        uuid: 1,
        description:
            "Take the hassle out of calling around a dozen showcase, only to find out that half are busy on your preferred date, and the other half are too expensive.",
        title: "Venue Search",
        image:
            "https://images.pexels.com/photos/262569/pexels-photo-262569.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
    },
    {
        key: 2,
        id: 2,
        uuid: 2,
        description:
            "Tell Venuebooker about your event in a few quick and easy steps, and we will find you a choice of venues that suit your event booking needs & requirements.",
        title: "Package Selection",
        image:
            "https://images.pexels.com/photos/297755/pexels-photo-297755.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
    },
    {
        key: 3,
        id: 3,
        uuid: 3,
        name: "Booking",
        description:
            "Your Venuebooker expert will be in touch within one working hour. They will work directly with the venue managers on your behalf to ensure you receive a personalised quote within 24 hours.",
        title: "Request a Quote",
        image:
            "https://images.pexels.com/photos/7374/startup-photos.jpg?w=1260&h=750&auto=compress&cs=tinysrgb"
    },
    {
        key: 4,
        id: 4,
        uuid: 4,
        description:
            "Venuebooker's services for event bookers is entirely free! You tell us what you need and we find you just that, plus a few extra choices you might not have thought off.",
        title: "Confirm Booking",
        image:
            "https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
    }
];

class AboutSection extends Component {
    render() {
        return (
            <section className="section how-to">
                <div className="container">
                    <h1 className="title">How It Works</h1>
                    <br />
                    <br />
                    <br />
                    <div className="content is-mobile is-12">
                        <CardList data={cards} />
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutSection;
