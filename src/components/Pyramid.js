import React from 'react'

const pyramid = () => {
    return (
        <div className='pyramid-Container'>
            <div className='pyramid'>
                <div className="glow"></div>
                <div>
                    <span className="face1" style={{ "--i": '0' }}></span>
                    <span className="face2" style={{ "--i": '1' }}></span>
                    <span className="face3" style={{ "--i": '2' }}></span>
                    <span className="face4" style={{ "--i": '3' }}></span>
                </div>
            </div>
        </div>
    )
}

export default pyramid
