import React from 'react'
import { GutContext, GutContextProvider } from './components/gutContext';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Collection from './components/Collection';

export default function App() {
  // header and nav appears on all views 

  return (
    <>
    <GutContextProvider>
      <div className="header">GutMinder</div>
      <nav>
        <Link className="navbuttons" to="/">Home</Link>
        <Link className="navbuttons" to="/about">About</Link>
        <Link className="navbuttons" to="/collection">See All Foods</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/collection" element={<Collection/>}/>
      </Routes>
    </GutContextProvider>
      
    </>
  )
}

