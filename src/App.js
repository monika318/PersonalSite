import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Project from './components/Project';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import BlobCombined from './components/BlobCombined';
// import { useRef } from 'react'
// import Pyramid from './components/Pyramid'


function App() {
  // const section1Ref = useRef(null);
  // const section2Ref = useRef(null);
  // const section3Ref = useRef(null);
  return (

    <div style={{ marginLeft: "110px", marginRight: "110px", marginTop: "40px" }}>
      <Navbar />
      <BlobCombined />
      <div className='AppProfile' >
        <Profile />
      </div>
      <hr className="dotted"></hr>

      <hr className="dotted"></hr>
      <div className='AppSkill' id="skills">
        <h4>My Skills</h4>
        <Skills />
      </div>
      <hr className="dotted"></hr>
      <div className='AppProjects' id="Profile">
        <h4 className='Personalh5'>Personal Projects</h4>
        <Project />
      </div>
      <hr className="dotted"></hr>
      <div className='AppContacts' id="contact">
        <ContactMe />
      </div>
      <div className='AppFooter'>
        <Footer />
      </div>
      {/* <Pyramid /> */}

    </div>
  );
}

export default App;
