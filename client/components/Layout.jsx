import React from 'react';
import { Link } from 'react-router-dom';
export default function Layout() {
    return (
        <>
            <div className="header">
            <h1> &nbsp;&nbsp; Joshua Desroches Portfolio</h1>
            <nav>
                <button onClick={() => window.location.href = "/"}>Home</button> 
                <button onClick={() => window.location.href = "/education"}>Education</button> 
                <button onClick={() => window.location.href = "/project"}>Projects</button> 
                <button onClick={() => window.location.href = "/services"}>Services</button> 
                <button onClick={() => window.location.href = "/contact"}>Contact</button>
                <button onClick={() => window.location.href = "/about"}>About</button> 
            </nav>
            <br/>
            <hr />
            </div>
        </>
    );
}