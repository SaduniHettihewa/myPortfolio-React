import React from 'react'
import About from './about'
import './body.css'
import Contact from './contact'
import Education from './education'
import Projects from './projects'
import Skills from './skills'

function Body() {
    return (
        <div classNam="body">
            <section id="about">
                <About/>
            </section>
            <section id="Education">
                <Education/>
            </section>
            <section id="Projects">
                <Projects/>
            </section>
            <section id="Skills">
                <Skills/>
            </section>
            <section id="contact">
                <Contact/>
            </section>
        </div>
    )
}

export default Body
