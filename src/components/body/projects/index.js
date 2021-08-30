import React from 'react'
import Seperator from '../../common/seperator';
import { ProjectData } from '../../data/project';
import Projectcard from './projectcard';
import './projects.css'

function Projects() {
    const data =ProjectData;
    return (
        <div className="projects">
            <Seperator/>
            <label className="project-label">Projects</label>
            <div>
                <div className="box">
               {data.map((project)=>{
                  return <Projectcard project={project}/>
               }
               )}
               </div>
            </div>
        </div>
    )
}

export default Projects
