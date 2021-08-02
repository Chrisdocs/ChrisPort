import React from 'react';
import '../../assets/css/header.css';

function Header(props) {

    return (
        <div>
            <img className="wolf-logo" src={require('../../assets/img/wolf-logo.png').default} />
            <h1 className='header-title'>{`{Wolfe}`} Web.Development</h1>
        </div>
    )

};

export default Header;