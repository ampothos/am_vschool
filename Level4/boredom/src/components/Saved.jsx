import React from "react";
import { BoredContext, BoredContextProvider } from "./boredContext";

export default function Saved(props) {
    const con = React.useContext(BoredContext)
    console.log(con.saved)
    const saved = con.saved.map(item => {
            const cName = item.isChecked ? "short-item checked" : "short-item"
            return (
            <li className={cName} key={item.key} id={item.key}>
                <input name="short-checkbox " 
                        type="checkbox"
                        checked = {item.isChecked}
                        onChange={con.markCheck}/>
                <div className={"short-name"}>{item.activity}</div>
                
            </li>
        )})
    return (
        <div>
            <div className="table-container-saved">
                    <div className="saved-title">Saved</div>
                    <ul className="saved-table">
                        {saved}
                    </ul>
                   
                </div>
        </div>
    )
}