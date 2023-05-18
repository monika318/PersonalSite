import React from 'react'
import ProjectItem from './ProjectItem'

const Project = () => {
    const articles = [
        {
            "title": "NewsChimps",
            "description": "NewsChimp is a news website that leverages the NEWSAPI to showcase news articles sourced from widely recognized countries. It offers the functionality to categorize news content based on different genres such as business, entertainment, and more, enabling users to sort and access news according to their preferences.",
            // "img": "https://www.ajc.com/politics/eight-gop-electors-accept-immunity-deals-in-fulton-trump-probe/VWJO62QAMFAZXJYDPVDJ3DHFI4/",
            "img": "../images/NewsChimps.png",
            "github": "https://github.com/monika318/NewsChimps",
            "terms": "ReactJS, NewsAPI"
        },
        {
            "title": "HomePhysio",
            "description": "‘Home Physio' is a website where patients can book appointments for home physiotherapy sessions who are unable to visit a clinic or hospital for an extended period of time or on a regular basis. This website also aims to provide a freelancing platform for physiotherapists. ",
            // "img": "https://www.ajc.com/politics/eight-gop-electors-accept-immunity-deals-in-fulton-trump-probe/VWJO62QAMFAZXJYDPVDJ3DHFI4/",
            "img": "C:/Studies/React may 1/mysite/src/images/DrumKit.png",
            "github": "https://github.com/monika318/HomePhysio",
            "terms": ".NET, AngularJS, MicrosoftSQL"
        },
        {
            "title": "Inotebook",
            "description": "Inotebook is a web-based note-taking application that provides users with the ability to create, edit, and delete notes. It features sign-in and login modules, allowing users to securely access their accounts. Additionally, the application includes an alert system to notify users of important updates or events.",
            "img": "C:/Studies/React may 1/mysite/src/images/DrumKit.png",
            "github": "https://github.com/monika318/inotebook",
            "terms": "ReactJS, NodeJS, MongoDB"
        },
        {
            "title": "DrumKit",
            "description": "The Drumkit is a minimalistic one-page application that allows users to generate drum sounds by clicking the mouse or pressing certain keys. It is built using vanilla JavaScript and CSS, without the need for any external frameworks or libraries.",
            // "img": "https://img.etimg.com/thumb/msid-100045625,width-1070,height-580,imgsize-185672,overlay-economictimes/photo.jpg",
            "img": "C:/Studies/React may 1/mysite/src/images/DrumKit.png",
            "github": "https://github.com/monika318/Drum-Kit",
            "terms": "HTML, CSS, JavaScript"
        }
    ]
    return (
        <div className='container my-3 project-section'>
            <div className="row">
                {articles.map((element) => {
                    {/* let img1 = element.url */ }
                    {/* console.log(img1) */ }
                    return (
                        <div div className="col-md-6 my-5" style={{ display: 'flex', justifyContent: 'center' }} key={element.github} >
                            <ProjectItem title={element.title} description={!element.description ? "" : element.description.slice(0, 120)} imgUrl={element.img} github={element.github} terms={element.terms}></ProjectItem>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Project
