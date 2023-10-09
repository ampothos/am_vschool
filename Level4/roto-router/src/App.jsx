import React from "react"
import Team from "./components/Team"
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Plumber from "./components/Plumber"


function App() {
  return (
    <>
        <nav>
          <Link className="navbuttons" to="/">Home</Link>
          <Link className="navbuttons" to="/about">About</Link>
          <Link className="navbuttons" to="/services">Services</Link>
          <Link className="navbuttons" to="/team">Team</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/team/:plumberId" element={<Plumber/>}/>
        </Routes>
      
    </>
  )
}

export default App
