import React from 'react'
import profile from '../images/profile.png'
import pdf from '../images/MonikaShakya.pdf'

const Profile = () => {
    return (
        <div className='container profileContainer' style={{ height: '400px', marginTop: "50px" }}>
            <div className="row" style={{ alignItems: 'center' }} >
                <div className="col-md-7" style={{ paddingTop: '100px', textAlign: 'right' }} >
                    <h1>Computer Engineer/ <br></br>Web Developer</h1>
                    <br></br>
                    <p style={{ fontFamily: 'cursive' }}> Hi! I am Monika, a freshly  undergraduate pursuing a degree in Computer Engineering with a strong desire to learn and grow.</p>
                    <a href={pdf} className='btn' download>
                        GetMyCV
                    </a>
                </div>
                <div className="col-md-5 d-none d-md-block">
                    <img src={profile} alt='profile' style={{ height: "50%", width: "50%", paddingLeft: '20px' }} />
                    {/* <p>image</p> */}
                </div>
            </div>
        </div>
    )
}

export default Profile
