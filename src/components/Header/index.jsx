import React from 'react';
import '../../assets/css/header.css';
import Navigation from '../Navigation';

function Header(props) {

    return (
        <div className="container">
            <div className="row align-items-center header-box">
                    <div className="col-3">
                        <img className="wolf-logo" src={require('../../assets/img/wolf-logo2.png').default} alt={"wolf and moon logo"} />
                    </div>
                    <div className="col-6">
                        <a href="/" className="header-title-link">{`{Wolfe}`} Web.Development
                        </a>
                    </div>
                    <div className="col-3">
                        <img className="wolf-logo" src={require('../../assets/img/wolf-logo3.png').default} alt={"wolf and moon logo"} />
                    </div>
            </div>
        <Navigation></Navigation>
        </div>
    )

};

export default Header;