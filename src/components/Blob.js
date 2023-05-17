import React from 'react'
// import profile from '../images/profileHalf.png'

const blob = (props) => {
    const style = {
        position: "absolute",
        height: props.height,
        width: props.width
    }
    const styleSection = {
        position: "absolute",
        display: "flex",
        top: props.top,
        left: props.left,
    }
    return (
        <section style={styleSection}>
            <div className="blob" style={style}>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke="black" stroke-width="1" transform="translate(100 100)" ><animate attributeName="d" dur={props.speed} repeatCount="indefinite"
                        values="M60.1,-47.7C75.3,-28.8,83.4,-4,76.9,14.9C70.5,33.7,49.6,46.6,30.7,50.7C11.7,54.8,-5.1,50.3,-19.9,42.6C-34.6,35,-47.2,24.3,-50.7,11C-54.2,-2.4,-48.7,-18.4,-38.7,-36.1C-28.8,-53.8,-14.4,-73.2,4,-76.4C22.4,-79.6,44.8,-66.6,60.1,-47.7Z; 
                            M32.8,-31.5C37,-20.9,31.1,-7.6,29.5,9.7C27.9,27,30.7,48.3,22.4,55.9C14.1,63.5,-5.3,57.4,-25.1,49.1C-44.8,40.7,-64.9,30,-67.8,15.9C-70.7,1.7,-56.5,-16,-42.4,-28.9C-28.2,-41.8,-14.1,-49.8,0.1,-49.8C14.3,-49.9,28.6,-42.1,32.8,-31.5Z;
                            M52.4,-51.4C57.7,-35.2,44.6,-14,37.7,5.5C30.8,25.1,30.1,43,20.2,51.5C10.3,59.9,-8.8,58.9,-23,50.9C-37.2,42.9,-46.6,27.8,-47.9,13.4C-49.2,-1,-42.5,-14.8,-33.2,-32C-23.9,-49.1,-12,-69.6,5.8,-74.2C23.6,-78.9,47.2,-67.7,52.4,-51.4Z;
                            M48.3,-42.1C58,-26.3,58.2,-6.5,51.8,8.1C45.5,22.6,32.7,31.8,17.9,40.1C3.1,48.4,-13.6,55.7,-32.1,52.3C-50.6,49,-70.8,34.9,-74.2,17.6C-77.6,0.4,-64.1,-20,-49,-37.1C-33.8,-54.2,-16.9,-68,1.2,-68.9C19.3,-69.9,38.5,-58,48.3,-42.1Z;
                            M60.1,-47.7C75.3,-28.8,83.4,-4,76.9,14.9C70.5,33.7,49.6,46.6,30.7,50.7C11.7,54.8,-5.1,50.3,-19.9,42.6C-34.6,35,-47.2,24.3,-50.7,11C-54.2,-2.4,-48.7,-18.4,-38.7,-36.1C-28.8,-53.8,-14.4,-73.2,4,-76.4C22.4,-79.6,44.8,-66.6,60.1,-47.7Z"
                    ></animate></path>
                </svg>
            </div>
            {/* <div className='photo animated-shape'>
                    <img src={profile} style={{ objectFit: "cover", width: "100%", height: "100%", }} width="10px" height="10px" className='shape-image' />
                </div> */}
        </section>

    )
}

export default blob
