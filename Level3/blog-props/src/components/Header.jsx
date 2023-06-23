import React from "react" 
import Navbar from "./Navbar"

export default function Header() {
    return (
        
        <div className="header">
            <div className="transparent-overlay">
                <Navbar/>
                <div className="heading-container">
                    <h1 className="title-text">Clean Blog</h1>
                    <h3 className="title-subtext">A Blog Theme by Start Bootstrap</h3>
                    </div>
            </div>
        </div>
    )
}