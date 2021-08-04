import React, {useState} from 'react';
import '../../assets/css/project.css';
import runBuddyImg from '../../assets/img/run-snip.png';
import knowGoImg from '../../assets/img/knowgo.png';
import chatnLearnImg from '../../assets/img/chat.png';
import socialImg from '../../assets/img/social.png';

function Project({ proj }) {

    const projects = [
        {
            id: 1,
            projectName: "Run Buddy",
            projectLink: "https://chrisdocs.github.io/run-buddy/",
            projectImg: runBuddyImg,
            imageAlt: "lorem",
            projectText: "lorem ipsum..."
        },
        {
            id: 2,
            projectName: "KnowGo",
            projectLink: "https://chrisdocs.github.io/KnowGo/",
            projectImg: knowGoImg,
            imageAlt: "lorem",
            projectText: "lorem ipsum..."
        },
        {
            id: 2,
            projectName: "Chat n' Learn",
            projectLink: "https://chatnlearn.herokuapp.com/",
            projectImg: chatnLearnImg,
            imageAlt: "lorem",
            projectText: "lorem ipsum..."
        },
        {
            id: 2,
            projectName: "Social Media API",
            projectLink: "https://github.com/Chrisdocs/SocNetAPI",
            projectImg: socialImg,
            imageAlt: "lorem",
            projectText: "lorem ipsum..."
        },
    ];


    return (
            <section id="projects-section" className="">
            <div className="container">
            <div className="flex flex-col">
                <h1 className="">
                Welcome to my Projects!
                </h1>
                <p className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                fuga dolore.
                </p>
            </div>
            <div className="flex flex-wrap -m-4">
                {projects.map((project, id) => (
                    <section className="project-map-section">
                        <div>
                            <img src={project.projectImg}></img>
                            
                            <a href={project.projectLink}>{project.projectName}</a>
                        </div>
                        <div>
                            <p>{project.projectText}</p>
                        </div>
                    </section>
                ))}
            </div>
            </div>
        </section>
    )
};

export default Project