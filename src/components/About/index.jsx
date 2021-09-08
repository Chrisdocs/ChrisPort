import React from 'react';
import '../../assets/css/about.css';

function About(props) {

    return (
        <section className="about-section">
            <div>
                <h1 className="about-title">
                    About Chris
                </h1>
            </div>
            <div>
                <img className="about-img" alt="Chris by a canyon" src={require('../../assets/img/me-2.png').default} />
            </div>
            <div className="about-text-div">
                <p className="about-text" id="text-top">
                Full stack developer with a certificate from the University of Texas at Austin Coding Bootcamp. I have worked with a few small teams to develop MERN apps which focus on mobile-first design.  Some of these projects include HTML, CSS, JavaScript, jQuery, Express.js, React.js, Node.js, MongoDB, MySQL, Git, and more. I am excited to continue to develop these skills to enhance my career as a developer.

I am always in pursuit of tasks which challenge & engage me, pushing my growth forward to best serve the needs of my team.  My history as a team leader and business owner have equipped me with agility, business acumen, critical & strategic thinking, creativity, interpersonal awareness, people leadership, conflict management, pragmatism & resilience. I strive to translate these skills into my role as a developer. I have the background, skills and desire to become a strong future leader in this industry.

                </p>
            </div>
        </section>
    )
}

export default About;