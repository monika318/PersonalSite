import React from 'react'
import html from '../images/html.png'
import css from '../images/Css.png'
import javaScript from '../images/JavaScript.png'
import reactJs from '../images/react.png'
import nodejs from '../images/nodejs.png'
import bootstrap from '../images/bootstrap.png'

const Skills = () => {

    return (

        <div className='container'>
            <div className="row skillrow" >
                <div className="skillcol" >
                    <img src={html} alt="html" />
                </div>
                <div className="skillcol ">
                    <img src={css} alt="html" />
                </div>
                <div className="skillcol" >
                    <img src={bootstrap} alt="html" />
                </div>
            </div>
            <div className="row skillrow">
                <div className="skillcol">
                    <img src={javaScript} alt="html" />
                </div>
                <div className="skillcol">
                    <img src={reactJs} alt="html" />
                </div>
                <div className="skillcol">
                    <img src={nodejs} alt="html" />
                </div>
            </div>

        </div>
    )
}

export default Skills
