import React from 'react'
import SocialContent from '../../common/socialContact'
import './about.css'

function About() {
    return (
        <div className="about">
           <div className="about-top">
           <div className="about-info">
               {/* <div className="box"> */}
           <br/>
           <div className="about-photo">
               <div>
               <img src={require("../../../Assests/photo.png").default} className="photo"></img>
               </div>
           </div>
              I am <span className="name">Saduni </span>.<br/>
            I'm an undergraduate at the University of Moratuwa. <br/>
            I love to learn languages and frameworks.
            <SocialContent/>
          
           </div>
{/*           
           </div> */}
           </div>
         
               
             
              
           </div>
      
    )
}

export default About
