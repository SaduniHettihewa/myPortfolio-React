import React from 'react'
import Boady from '../body'
import Header from '../header'
import Footer from '../footer'
import './home.css'

function Home() {
    return (
        <div className ="home">
            <div>
            <Header />
        </div>
        <div>
            <Boady/>
        </div>
        <div>
            <Footer/>
        </div>
        </div>
    )
}

export default Home
