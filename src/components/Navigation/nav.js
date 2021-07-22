import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    const link = {
        color: "darkgrey",
    }
    const activeLink = {
        color: "lightblue",
        fontWeight: "bold"
    }

    return(
        <div className="NavBar">
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
                    to="/tracker"
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