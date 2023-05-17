import React from 'react'

const ContactMe = () => {
    return (
        <div>
            <h4 style={{ textAlign: 'left' }}>Contact</h4>
            <h6 style={{ marginLeft: '50px' }}>Don't be Shy ! Find me at :</h6>
            <div className="row" style={{ marginTop: '30px', marginLeft: '50px' }}>
                <div className="col ">
                    <div class="grid-container">
                        <div class="item icon">
                            <i class="fa-solid fa-envelope fa-2xl"></i>
                        </div>
                        <div class="item">
                            <strong>Mail</strong>
                        </div>
                        <div class="item">
                            <a href="https://mail.google.com/mail/?view=cm&to=monikashakyaofficial@gmail.com">monikashakyaofficial@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="grid-container">
                        <div class="item icon">
                            <i class="fa-brands fa-linkedin fa-2xl"></i>
                            {/* <i class="fa-brands fa-square-instagram fa-2xl"></i> */}
                        </div>
                        <div class="item">
                            <strong>LinkedIn</strong>
                        </div>
                        <div class="item">
                            <a href="https://www.linkedin.com/in/monika-shakya-47949b264/">monika-shakya-47949b264</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="grid-container">
                        <div class="item icon">
                            <i class="fa-brands fa-square-instagram fa-2xl"></i>
                        </div>
                        <div class="item">
                            <strong>Instagram</strong>
                        </div>
                        <div class="item">
                            <a href="https://www.instagram.com/mmoniikaa_/">mmoniikaa_</a>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContactMe
