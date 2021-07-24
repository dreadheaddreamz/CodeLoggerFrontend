import React from 'react'
import homeimage from '../images/homeimage.jpeg'

const Home = () => {
        return (
            <div>
                <h1><strong>Code Task</strong></h1>
                <img src={homeimage} alt="home" height={300} width={300} className="home-image" />
                <p>
                    Welcome to Code Log where you can track and keep notes of the progess you have made in your coding journey. 
                    As well as keeping track of your progress, we also have a To Do list. You can use this list to prioritize what 
                    is most important to learn or anything else you see fit.
                </p>
            </div>
        )
    }

export default Home