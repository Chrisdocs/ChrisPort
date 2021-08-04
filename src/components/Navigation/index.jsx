import React from 'react';
import '../../assets/css/nav.css';
import Project from '../Project'

function Navigation(props) {

    return (
        <section className="nav-section">
            <div className="container">
            <div className="row align-items-start">
                <div className="col">
                {" "}
                    <a href="/" data-testid="about" className="nav-link">
                        About
                    </a>
                </div>
                <div className="col">
                {" "}
                    <a href="/" data-testid="projects" className="nav-link">
                        Projects
                    </a>
                </div>
                <div className="col">
                    <a href="/" data-testid="contact" className="nav-link">
                        Contact
                    </a>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Navigation;