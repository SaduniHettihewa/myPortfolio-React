import React from 'react'
import './mobile.css'

function Mobile({isOpen,setOpen}) {
    return (
        <div className="mobile">
           <div className="closeIcon" onClick={()=>setOpen(!isOpen)}>
           <i class="fi-rr-delete close-icon"></i>
           </div>
           <div className="mobile-options">
                <a href="#Education">
                <i class="fi-rr-graduation-cap option-icon"></i> Education
                </a>
            </div>
            <div className="mobile-options">
                <a href="#Project">
                <i class="fi-rr-edit-alt option-icon"></i> Projects
                </a>
            </div>
            <div className="mobile-options">
                <a href="#Skills">
                <i class="fi-rr-star option-icon"></i> Skills
                </a>
            </div>
            <div className="mobile-options">
            <a href="#contact">
            <i class="fi-rr-following option-icon"></i> Contact
            </a>
        
        </div>
           </div>
       
    )
}

export default Mobile
