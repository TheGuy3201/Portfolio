import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Project from './components/Project'
import Layout from './components/Layout'
import Services from './components/Services'
const MainRouter = () => {
    return (
        <div>
            <Layout/>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/About" element={<About />} />
                <Route exact path="/Education" element={<Education />} />
                <Route exact path="/Project" element={<Project />} />
                <Route exact path="/Contact" element={<Contact />} />
                <Route exact path="/Services" element={<Services />} />
            </Routes>
        </div>
    )
}
export default MainRouter