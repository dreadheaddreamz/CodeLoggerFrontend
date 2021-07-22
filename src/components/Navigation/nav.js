import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './logo'

const Nav = () => {
    const link = {
        color: "black",
    }
    const activeLink = {
        color: "lightblue",
        fontWeight: "bold"
    }

    return(
        <img src="public/codelog.png" alt="" />,
        <div className="NavBar">
            <Logo />
            <ul>
            <li>
                    <NavLink 
                    exact
                    to="/"
                    style={link}
                    activeStyle={activeLink}>
                        Home
                        <br /> 
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    exact
                    to="/trackers"
                    style={link}
                    activeStyle={activeLink}>
                        Log
                        <li> | </li>
                    </NavLink>
                </li>
                <li>
                <NavLink
                exact
                to="/ToDo"
                style={link}
                activeStyle={activeLink}>
                    To Do's
                    <li> | </li>
                </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav