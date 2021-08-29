import React from 'react'
import './projectcard.css'


function Projectcard({project}) {
    return (
        <div className="project-card">
            <div className="project-info">  
            <label>{project.title}</label>
            <div>
               <p> {project.about}</p>
            </div>
             </div>  
                <img src={project.image} className="projectphoto"></img>
                <div className="tag">
                   {project.tags.map((tag)=>{
                       return <label className="tag-lable">{tag}</label>
                   })}                 
            </div>      
        </div>
        
    )
}

export default Projectcard
