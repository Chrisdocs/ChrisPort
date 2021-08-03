import React from 'react';
import '../../assets/css/header.css';

function Header(props) {

    return (
        <div className="container header-box">
            <div className="row align-items-center">
                    <div className="col-3">
                        <img className="wolf-logo" src={require('../../assets/img/wolf-logo2.png').default} alt={"wolf and moon logo"} />
                    </div>
                    <div className="col-8">
                        <a href="/" className="header-title-link">{`{Wolfe}`} Web.Development
                        </a>
                    </div>
            </div>

        </div>
    )

};

export default Header;