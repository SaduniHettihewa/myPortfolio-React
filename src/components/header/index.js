import React from 'react'
import { useState } from 'react';
import Web from './web'
import './header.css'
import Mobile from './mobile';

function Header() {
    const [isOpen,setOpen]= useState(false);
    return (
        <div className="header">
        <div className="logo">
            Hello !
        </div>
        <div className="menu">
               <div className="web-menu">
                  <Web/>
               </div>
               <div className="mobile-menu">
                   <div onClick={()=>setOpen(!isOpen) }>
                   <i class="fi-rr-compress-alt menu-icon"></i>
                   </div>
                   {isOpen && <Mobile  isOpen={isOpen}    setOpen={setOpen}/>}
               </div>
        </div>
        </div>
    )
}

export default Header
