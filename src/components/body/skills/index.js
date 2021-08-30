import React from 'react'
import Seperator from '../../common/seperator'
import './skills.css'

function Skills() {
    return (
        <div className="skills">
            <Seperator/>
            <label className="skill-label">Skills</label>
            <div className="nameCard"></div>
            <div className="imagelocation" >
            <img src={require("../../../Assests/skills.jpg").default} className="img"></img>
            </div>
            
            <label className="lableTag">HTML,CSS</label>
           <br/>
                <label className="lableTag">PHP</label>
                <br/>
                <label className="lableTag">JavaScript</label>
                <br/>
               
                <label className="lableTag">ReactJs</label><br/>
                <label className="lableTag">ReactNative</label>
               

            
          
        </div>
    )
}

export default Skills
