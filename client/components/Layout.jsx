import React from 'react';

export default function Layout() {
    return (
        <>
            <div className="header">
                <div className="logo-title">
                    <img src="./res/JoshuaD Logo.png" className="Logo" alt="JD Logo" />
                    <h1>Joshua Desroches</h1>
                </div>

                <nav className="nav-bar">
                    <button onClick={() => window.location.href = "/"}>Home</button>
                    <button onClick={() => window.location.href = "/education"}>Education</button>
                    <button onClick={() => window.location.href = "/project"}>Projects</button>
                    <button onClick={() => window.location.href = "/services"}>Services</button>
                    <button onClick={() => window.location.href = "/contact"}>Contact</button>
                    <button onClick={() => window.location.href = "/about"}>About</button>
                </nav>
            </div>
            <hr />
        </>
    );
}
