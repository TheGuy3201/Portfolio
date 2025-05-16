import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './src/About'
import Contact from './src/Contact'
import Education from './src/Education'
import Project from './src/Project'
import Layout from './components/Layout'
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
            </Routes>
        </div>
    )
}
export default MainRouter