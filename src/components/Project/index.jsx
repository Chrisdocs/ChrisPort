import React from 'react';
import '../../assets/css/project.css';
import runBuddyImg from '../../assets/img/run-snip.png';
import knowGoImg from '../../assets/img/knowgo.png';
import chatnLearnImg from '../../assets/img/chat.png';
import socialImg from '../../assets/img/social.png';

function Project(props) {

    const projects = [
        {
            id: 1,
            projectName: "Run Buddy",
            projectLink: "https://chrisdocs.github.io/run-buddy/",
            projectImg: runBuddyImg,
            imageAlt: "Snippet of the Run Buddy app.",
            projectText: "lorem ipsum..."
        },
        {
            id: 2,
            projectName: "KnowGo",
            projectLink: "https://chrisdocs.github.io/KnowGo/",
            projectImg: knowGoImg,
            imageAlt: "snippet of the KnowGo app.",
            projectText: "lorem ipsum..."
        },
        {
            id: 2,
            projectName: "Chat n' Learn",
            projectLink: "https://chatnlearn.herokuapp.com/",
            projectImg: chatnLearnImg,
            imageAlt: "Snippet of the Chat and learn app.",
            projectText: "lorem ipsum..."
        },
        {
            id: 2,
            projectName: "Social Media API",
            projectLink: "https://github.com/Chrisdocs/SocNetAPI",
            projectImg: socialImg,
            imageAlt: "image which reads Social Media Api in bold font.",
            projectText: "lorem ipsum..."
        },
    ];


    return (
            <section id="projects-section" className="">
            <div className="container">
            <div className="flex flex-col">
                <h1 className="project-page-title">
                    Welcome to my Projects!
                </h1>
                <p className="project-page-desc">
                    Here you will find a collection of projects I have completed during my career!  Some may be purely front end, some back end and some both!
                </p>
            </div>
            <div className="flex flex-wrap -m-4">
                {projects.map((project, id) => (
                    <section className="project-map-section">
                        <div className="project-div card">
                            <div>
                                <img className="project-image card-img-top" src={project.projectImg} alt={project.imageAlt}></img>
                            </div>
                            <div>
                            <div className="card-body">
                                <a className="project-title card-title" href={project.projectLink}>{project.projectName}</a>
                            </div>
                            <div>
                                <p className="project-text card-text">{project.projectText}</p>
                            </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
            </div>
        </section>
    )
};

export default Project;