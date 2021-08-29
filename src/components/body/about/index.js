import React from 'react'
import SocialContent from '../../common/socialContact'
import './about.css'

function About() {
    return (
        <div className="about">
           <div className="about-top">
           <div className="about-info">
           Hi there 👋 <br/>
              I'm Saduni Hettihewa.<br/>
            I'm an undergraduate at the University of Moratuwa. <br/>
            I love to learn languages and frameworks.
           </div>
           <div className="about-photo">
               <div>
               <img src={require("../../../Assests/photo.png").default} className="photo"></img>
               </div>
           </div>
           </div>
         
               
               <SocialContent/>
              
           </div>
      
    )
}

export default About
