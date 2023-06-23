import React from "react" 
import facebook from "./images/facebook.png"
import twitter from "./images/twitter.png"
import github from "./images/github.png"

export default function Footer() {
    return (
        <div className="footer">
            <div className="icons">
                <img src={facebook}></img>
                <img src={twitter}></img>
                <img src={github}></img>
            </div>
            <div className="copyright">Copyright Your Website 2023</div>
        </div>
    )
}