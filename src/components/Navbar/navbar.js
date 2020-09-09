import React from 'react';
import './navbar.css';


export const Navbar=()=>{
    return(
        <div className="nav-container">
            <div className="nav-brand">
                <p>Connect</p>
            </div>
            <div className="navlinks-container">
                <li>Home</li>
                <li>About</li>
                <li>Blogs</li>
            </div>
            <div className="nav-sessions">
                <p>sign-in</p>
            </div>
        </div>
    )
}