import React from 'react'
import homeimage from '../images/homeimage.jpeg'

const Home = () => {
        return (
            <div className="homesection" >
                <h1><strong>Code Task</strong></h1>
                <img src={homeimage} alt="home" height={300} width={300} className="home-image" />
               <span>
                    Welcome to Code Task where you can track and keep notes of the progess you have made in your coding journey. 
                    As well as keeping track of your progress, we also have a Task list. You can use this list to prioritize what 
                    is most important to learn or anything else you see fit.
                </span>
            </div>
        )
    }

export default Home