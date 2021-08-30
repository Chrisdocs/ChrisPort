import React from 'react';
import {
    Route,
    NavLink,
    HashRouter,
    Switch
} from "react-router-dom";
import '../../assets/css/nav.css';
import Project from '../Project'
import About from "../About";
import Contact from "../Contact";
import Resume from "../Resume";
import NoMatch from '../../pages/NoMatch';

function Navigation(props) {

    return (
        <HashRouter>
            <section className="nav-section">
                <div className="container">
                    <div className="row align-items-start">
                    <div className="col">
                        <NavLink exact to="/About" activeClassName="current-nav" className="nav-link" replace>About</NavLink>
                    </div>
                    <div className="col">
                        <NavLink exact to="/Project" activeClassName="current-nav" className="nav-link" replace>Projects</NavLink>
                    </div>
                    <div className="col">
                        <NavLink exact to="/Contact" activeClassName="current-nav" className="nav-link" replace>Contact</NavLink>
                    </div>
                    <div className="col">
                        <NavLink exact to="/Resume" activeClassName="current-nav" className="nav-link" replace>Resume</NavLink>
                    </div>
                    <div className="content">
                        <Switch>
                            <Route path="/Project" component={Project}/>

                            <Route path="/About" component={About} />

                            <Route path="/Contact" component={Contact} />

                            <Route path="/Resume" component={Resume} />

                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </div>
            </div>
        </section>
        </HashRouter>
    );
}

export default Navigation;