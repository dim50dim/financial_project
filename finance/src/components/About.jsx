import React from 'react'
import john from "./images/john-doe.png";
import './About.css';


const About = () => {
  return (
    <div>
         <div className="about">
            <div className="container">
                 <img src={john}/>
                 <d className="col-2">
                    <h2>About</h2>
                    <span className="line"></span>
                 </d>
            </div>
         </div>
    
    </div>
  )
}

export default About