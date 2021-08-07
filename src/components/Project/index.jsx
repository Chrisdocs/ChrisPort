import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../../assets/css/project.css';
import runBuddyImg from '../../assets/img/run-snip.png';
import knowGoImg from '../../assets/img/knowgo.png';
import chatnLearnImg from '../../assets/img/chat.png';
import socialImg from '../../assets/img/social.png';
import readmeImg from '../../assets/img/readmegen.png';
import taskImg from '../../assets/img/schImg.png';

function Project(props) {

    const projects = [
        {
            id: 1,
            projectName: "Run Buddy",
            projectLink: "https://chrisdocs.github.io/run-buddy/",
            projectGit: "https://github.com/Chrisdocs/run-buddy",
            projectImg: runBuddyImg,
            imageAlt: "Snippet of the Run Buddy app.",
            projectText: "A sample web App for conencting with personal trainers!"
        },
        {
            id: 2,
            projectName: "KnowGo",
            projectLink: "https://chrisdocs.github.io/KnowGo/",
            projectGit: "https://github.com/Chrisdocs/KnowGo",
            projectImg: knowGoImg,
            imageAlt: "snippet of the KnowGo app.",
            projectText: "Find out weather and local information before you go!"
        },
        {
            id: 3,
            projectName: "Chat n' Learn",
            projectLink: "https://chatnlearn.herokuapp.com/",
            projectGit: "https://github.com/Chrisdocs/ChatnLearn",
            projectImg: chatnLearnImg,
            imageAlt: "Snippet of the Chat and learn app.",
            projectText: "Chat with users while learning each others language!"
        },
        {
            id: 4,
            projectName: "Social Media API",
            projectLink: "https://github.com/Chrisdocs/SocNetAPI",
            projectGit: "https://github.com/Chrisdocs/SocNetAPI",
            projectImg: socialImg,
            imageAlt: "image which reads Social Media Api in bold font.",
            projectText: "An API for all your backend user management!"
        },
        {
            id: 5,
            projectName: "Readme Generator",
            projectLink: "https://github.com/Chrisdocs/Readme-Gen",
            projectGit: "https://github.com/Chrisdocs/Readme-Gen",
            projectImg: readmeImg,
            imageAlt: "reads Read me generator in bold font.",
            projectText: "Terminal program to help generate those posky readme.md files!"
        },
        {
            id: 6,
            projectName: "Task Scheduler",
            projectLink: "https://chrisdocs.github.io/calendar/",
            projectGit: "https://github.com/Chrisdocs/calendar",
            projectImg: taskImg,
            imageAlt: "A snippet of the task scheduler web-app",
            projectText: "A simple web app for managing your day to day tasks."
        }
    ];

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };


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

                {/* <div className="flex flex-wrap -m-4">
                    {projects.map((project, id) => (
                        <section key={project.id} className="project-map-section">
                            <div className="project-div card" key={project.id}>
                                <div>
                                    <img className="project-image card-img-top" src={project.projectImg} alt={project.imageAlt}></img>
                                </div>
                                <div className="card-body">
                                <div className="title-div">
                                    <a className="project-title card-title" href={project.projectLink}>{project.projectName}</a>
                                </div>
                                <div>
                                    <p className="project-text card-text">{project.projectText}</p>
                                </div>
                                </div>
                            </div>
                        </section>
                    ))}
                </div> */}

            </div>

            <div>
                <Carousel responsive={responsive}>
                        <div>
                            <div className="card">
                                <div>
                                    <img className="card-img-top" src={projects[0].projectImg}></img>
                                </div>
                                <div className="card-body">
                                    <div className="title-div">
                                        <a className="project-title card-title" href={projects[0].projectLink}>{projects[0].projectName}</a>
                                        <a className="gitlink" href={projects[0].projectGit}>
                                        <img className="gitimg" src={require('../../assets/img/github-icon2.png').default}/>
                                        </a>
                                    </div>
                                    <div className="gitlink">
                                        <p className="project-text card-text">{projects[0].projectText}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card">
                                <div>
                                    <img className="card-img-top" src={projects[1].projectImg}></img>
                                </div>
                                <div className="card-body">
                                    <div className="title-div">
                                        <a className="project-title card-title" href={projects[1].projectLink}>{projects[1].projectName}</a>
                                        <a className="gitlink" href={projects[1].projectGit}>
                                        <img className="gitimg" src={require('../../assets/img/github-icon2.png').default}/>
                                        </a>
                                    </div>
                                    <div>
                                        <p className="project-text card-text">{projects[1].projectText}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card">
                                <div>
                                    <img className="card-img-top" src={projects[2].projectImg}></img>
                                </div>
                                <div className="card-body">
                                    <div className="title-div">
                                        <a className="project-title card-title" href={projects[2].projectLink}>{projects[2].projectName}</a>
                                        <a className="gitlink" href={projects[2].projectGit}>
                                        <img className="gitimg" src={require('../../assets/img/github-icon2.png').default}/>
                                        </a>
                                    </div>
                                    <div>
                                        <p className="project-text card-text">{projects[2].projectText}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card">
                                <div>
                                    <img className="card-img-top" src={projects[3].projectImg}></img>
                                </div>
                                <div className="card-body">
                                    <div className="title-div">
                                        <a className="project-title card-title" href={projects[3].projectLink}>{projects[3].projectName}</a>
                                        <a className="gitlink" href={projects[3].projectGit}>
                                        <img className="gitimg" src={require('../../assets/img/github-icon2.png').default}/>
                                        </a>
                                    </div>
                                    <div>
                                        <p className="project-text card-text">{projects[3].projectText}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card">
                                <div>
                                    <img className="card-img-top" src={projects[4].projectImg}></img>
                                </div>
                                <div className="card-body">
                                    <div className="title-div">
                                        <a className="project-title card-title" href={projects[4].projectLink}>{projects[4].projectName}</a>
                                        <a className="gitlink" href={projects[4].projectGit}>
                                        <img className="gitimg" src={require('../../assets/img/github-icon2.png').default}/>
                                        </a>
                                    </div>
                                    <div>
                                        <p className="project-text card-text">{projects[4].projectText}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card">
                                <div>
                                    <img className="card-img-top" src={projects[5].projectImg}></img>
                                </div>
                                <div className="card-body">
                                    <div className="title-div">
                                        <a className="project-title card-title" href={projects[5].projectLink}>{projects[5].projectName}</a>
                                        <a className="gitlink" href={projects[5].projectGit}>
                                        <img className="gitimg" src={require('../../assets/img/github-icon2.png').default}/>
                                        </a>
                                    </div>
                                    <div>
                                        <p className="project-text card-text">{projects[5].projectText}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                </Carousel>
            </div>
        </section>
    )
};

export default Project;