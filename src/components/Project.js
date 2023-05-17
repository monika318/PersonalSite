import React from 'react'
import ProjectItem from './ProjectItem'

const Project = () => {
    const articles = [
        {
            "title": "NewsChimps",
            "description": "NewsChimp is a news website were the NEWSAPI has been used to render news from renowned countries",
            // "img": "https://www.ajc.com/politics/eight-gop-electors-accept-immunity-deals-in-fulton-trump-probe/VWJO62QAMFAZXJYDPVDJ3DHFI4/",
            "img": "../images/NewsChimps.png",
            "github": "https://github.com/monika318/NewsChimps",
            "terms": "ReactJS, NewsAPI"
        },
        {
            "title": "HomePhysio",
            "description": "Home Physio is a website designed to aid the patients and the physitherapists",
            // "img": "https://www.ajc.com/politics/eight-gop-electors-accept-immunity-deals-in-fulton-trump-probe/VWJO62QAMFAZXJYDPVDJ3DHFI4/",
            "img": "C:/Studies/React may 1/mysite/src/images/DrumKit.png",
            "github": "https://github.com/monika318/HomePhysio",
            "terms": ".NET, AngularJS, MicrosoftSQL"
        },
        {
            "title": "Inotebook",
            "description": "#An online note application",
            "img": "C:/Studies/React may 1/mysite/src/images/DrumKit.png",

            "github": "https://github.com/monika318/inotebook",
            "terms": "ReactJS, NodeJS, MongoDB"
        },
        {
            "title": "DrumKit",
            "description": "Drum kit is a simple website which plays drums sound on keypress and mouse click.",
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
                            <ProjectItem title={element.title} description={element.description} imgUrl={element.img} github={element.github} terms={element.terms}></ProjectItem>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Project
