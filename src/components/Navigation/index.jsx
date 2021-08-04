import React from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import '../../assets/css/nav.css';
import Project from '../Project'
import About from "../About";
import Contact from "../Contact";

function Navigation(props) {

    return (
        <HashRouter>
            <section className="nav-section">
                <div className="container">
                    <div className="row align-items-start">
                    <div className="col">
                        <NavLink exact to="/About" className="nav-link" replace>About</NavLink>
                    </div>
                    <div className="col">
                        <NavLink exact to="/Project" className="nav-link" replace>Projects</NavLink>
                    </div>
                    <div className="col">
                        <NavLink exact to="/Contact" className="nav-link" replace>Contact</NavLink>
                    </div>
                    <div className="content">
                        <Route path="/Project" component={Project}/>

                        <Route path="/About" component={About} />

                        <Route path="/Contact" component={Contact} />
                    </div>
                </div>
            </div>
        </section>
        </HashRouter>
    );
}

export default Navigation;