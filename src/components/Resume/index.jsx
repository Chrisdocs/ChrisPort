import React from 'react';
import '../../assets/css/resume.css'

function Resume(props) {

    return (
        <section>
            <h1 className="resume-title">Resume!</h1>
            <img className="resume-img" src={require('../../assets/img/resume.png').default} />
            <a className="download" href={require("../../assets/img/resume.png").default} download>
                <p>Dowload a copy!</p>
            </a>
        </section>
    )
}

export default Resume;