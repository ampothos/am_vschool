import React from "react"
import { BoredContext, BoredContextProvider } from "./boredContext"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default function Home() {
    const con = React.useContext(BoredContext)
   
    // returns a list of 5 or less activities, name only with  addform toggle button
    
    const saved = con.saved.map((item, index) => {
        if (index < 5) {
            return (
            <li className="short-item" key={item.key} id={item.key}>
                <input name="short-checkbox" 
                        type="checkbox"
                        checked = {con.saved.isChecked}
                        onChange={con.markCheck}/>
                <div className="short-name">{item.activity}</div>
                
            </li>
        )}})

    return (
        <div className="home-container">
            <div className="suggestion-container">
                <div className="suggestion">{con.activity.activity}</div>
                <div className="suggestion-buttons">
                    <button onClick={con.clickRequestNew}>New Suggestion</button>
                    <button onClick={con.saveActivity}>Save This Activity</button>
                </div>
            </div>
            <div className="tables">
                <div className="home-table-container saved">
                    <div className="saved-title">Saved</div>
                    <ul className="saved-table">
                        {saved}
                    </ul>
                    <Link className="navlink" to="/saved">Show All</Link>
                </div>
                
            </div>
        </div>
    )
}