import React from 'react'
import './web.css'

function Web() {
    return (
        <div className="web">
            <div className="web-options">
                <a href="#Education">
                <i class="fi-rr-graduation-cap option-icon"></i>Education
                </a>
            </div>
            <div className="web-options">
                <a href="#Project">
                <i class="fi-rr-edit-alt option-icon"></i>Projects
                </a>
            </div>
            <div className="web-options">
                <a href="#Skills">
                <i class="fi-rr-star option-icon"></i>Skills
                </a>
            </div>
            <div className="web-options">
            <a href="#contact">
            <i class="fi-rr-following option-icon"></i> Contact
            </a>
        
        </div>
        </div>
    )
}

export default Web
