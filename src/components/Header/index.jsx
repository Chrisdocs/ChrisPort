import React from 'react';
import '../../assets/css/header.css';

function Header(props) {

    return (
        <div className="container header-box">
            <div className="row align-items-center">
                    <div className="col-3">
                        <img className="wolf-logo" src={require('../../assets/img/wolf-logo.png').default} />
                    </div>
                    <div className="col-8">
                        <h1 className='header-title'>{`{Wolfe}`} Web.Development</h1>
                    </div>
            </div>

        </div>
    )

};

export default Header;