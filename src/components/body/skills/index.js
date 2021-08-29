import React from 'react'
import Seperator from '../../common/seperator'
import './skills.css'

function Skills() {
    return (
        <div className="skills">
            <Seperator/>
            <label className="skill-label">Skills</label>
            <div className="nameCard">
            <label className="lableTag">HTML,CSS</label>
           <br/>
                <label className="lableTag">PHP</label>
                <br/>
                <label className="lableTag">JavaScript</label>
                <br/>
                {/* <img src={require("../../../Assests/react.png").default} className="img"></img> */}
                <label className="lableTag">ReactJs</label><br/>
                <label className="lableTag">ReactNative</label>
                
            </div>
          
        </div>
    )
}

export default Skills
