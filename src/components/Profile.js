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
                    <p style={{ fontFamily: 'cursive' }}> Hello there! I'm Monika, a fresh graduate venturing into the world of computer engineering and web development. </p>
                    <a href={pdf} style={{ fontFamily: 'cursive' }} className='btn' download>
                        GetMyCV
                    </a>
                </div>
                <div className="col-md-5 d-none d-md-block">
                    <img src={profile} alt='profile' style={{ height: "50%", width: "50%" }} />
                    {/* <p>image</p> */}
                </div>
            </div>
        </div>
    )
}

export default Profile
