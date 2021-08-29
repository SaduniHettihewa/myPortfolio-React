import React from 'react'
import { ProjectData } from '../../data/project';
import Projectcard from './projectcard';
import './projects.css'

function Projects() {
    const data =ProjectData;
    return (
        <div className="projects">
            <label className="project-label">Projects</label>
            <div>
               {data.map((project)=>{
                  return <Projectcard project={project}/>
               }
               )}
            </div>
        </div>
    )
}

export default Projects
