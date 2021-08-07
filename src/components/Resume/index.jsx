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
            <div>
                <h2 className='prof-glance'>Proficiencies at a glance.</h2>
                <ul className='list-prof'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>MySQL</li>
                    <li>NoSQL</li>
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>React</li>
                    <li>Node.js</li>
                </ul>
            </div>
        </section>
    )
}

export default Resume;