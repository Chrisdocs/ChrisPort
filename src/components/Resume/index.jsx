import React from 'react';
import '../../assets/css/resume.css'

function Resume(props) {

    return (
        <section>
            <h2 className="resume-title">Resume!</h2>
            <img className="resume-img" src={require('../../assets/img/resume.png').default} />
        </section>
    )
}

export default Resume;