import React from 'react'
import Seperator from '../../common/seperator'
import SocialContent from '../../common/socialContact'
import './contact.css'

function Contact() {
    return (
        <div className="contact">
           <Seperator/>
           <lable className="cont-lable">Contact</lable>
           <div className="contact-container"></div>
           <div className="cont-left">
            <p>  Contact me on any platform</p> 
            <SocialContent/>
           </div>
           <div className="download">
           <a download href={require("../../../Assests/SaduniHettihewa.pdf").default}>
           <i class="fi-rr-cloud-download down-icon"/>
               Download Resume
             
           </a>
        </div>
        </div>
    )
}

export default Contact
