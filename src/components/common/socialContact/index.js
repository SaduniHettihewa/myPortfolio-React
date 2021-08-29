import React from 'react'
import { SocialData } from '../../data/Social'
import './socialContact.css'

function SocialContent() {
    const data= SocialData;
    return (
        <div className="socialContent">
          {data.map((item)=>{
              return(
                  <a href={item.Link}>
                      <div className="social-icon-div">
                          
                          <img src={item.Icon} className="social-icon"></img>
                          
                      </div>
                  </a>
              )
          })}
        </div>
    )
}

export default SocialContent
