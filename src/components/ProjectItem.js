import React from 'react'
import githubimg from '../images/GitHub.png'
import DrumKit from '../images/DrumKit.png'
import HomePhysio from '../images/HomePhysio.png'
import NewsChimps from '../images/NewsChimps.png'
import Inotebook from '../images/Inotebook.png'



const ProjectItem = (props) => {
    let { title, description, imgUrl, github, terms } = props;
    // console.log(props)

    let words = [];
    let word = '';
    for (let i = 0; i < terms.length; i++) {
        if (terms[i] !== ' ') {
            word += terms[i];
        }
        else {
            words.push(word);
            word = '';
        }
    }
    if (word !== '') {
        words.push(word);
    }
    // console.log(words)

    return (
        <>
            <div className="card">
                {title === 'NewsChimps' ? (
                    <img src={NewsChimps} alt="Avatar" style={{ width: '100%' }} />
                ) : title === 'DrumKit' ? (
                    <img src={DrumKit} alt="Avatar" style={{ width: '100%' }} />
                ) : title === 'HomePhysio' ? (
                    <img src={HomePhysio} alt="Avatar" style={{ width: '100%' }} />
                ) : title === 'Inotebook' ? (
                    <img src={Inotebook} alt="Avatar" style={{ width: '100%' }} />
                ) : (<img src={Inotebook} alt="Avatar" style={{ width: '100%' }} />)}

                <div className="projecttext ">
                    <h5><b>{title}</b></h5>
                    {words.map((element) => {
                        return <span className="labelanother another"> {element}</span>
                    })}
                    <p className="projectdescription">{description}</p>

                    <div className="card-footer">
                        <small className="text-body-secondary project"><a href={github}><span class="label other"><i class="fa-brands fa-github"></i>Code</span></a></small>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ProjectItem
