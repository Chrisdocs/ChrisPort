import React from 'react';
import '../../assets/css/about.css';

function About(props) {

    return (
        <section className="about-section">
            <div>
                <h2 className="about-title">
                    About Chris
                </h2>
            </div>
            <div>
                <img className="about-img" alt="Chris by a canyon" src={require('../../assets/img/me-2.png').default} />
            </div>
            <div className="about-text-div">
                <p className="about-text" id="text-top">
                    Based out of Austin Texas, Florida born, developing my web design tool belt and going on adventures in nature fills most of my free time. With a mind often caught between a love for the outdoors and technology, bringing them together whenever possible creates a unique challenge.
                </p>
                <p className="about-text">
                    A number of careers have come and gone over the years, but they have all imparted their own valuable lessons.  From architecture to photography, and retail management to gig worker, all of which have had great things to teach and introductiions to a variety of concepts.  These experiences have built a knowledge base which unites design and creativity with time and people management.
                </p>
                <p className="about-text" id="text-bottom">
                    There is a great belief in life which I share, “keep it simple”.  Often said but hard to follow. Whether a thousand miles from the closest habitation on a backpacking trip, or working on a project at home, It’s never a good idea to complicate things.  To successfully bring this concept into design, coding, and all endeavors is the ultimate goal.
                </p>
            </div>
        </section>
    )
}

export default About;