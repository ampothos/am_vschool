import React from "react" 

export default function BigTime(props){
    function changeOne() {
        props.setFunc(prev => ["red", prev[1], prev[2], prev[3]])
    }
    function changeTwo() {
        props.setFunc(prev => [prev[0], "orange", prev[2], prev[3]])
    }
    function changeThree() {
        props.setFunc(prev => [prev[0], prev[1], "yellow", prev[3]])
    }
    function changeFour() {
        props.setFunc(prev => [prev[0], prev[1], prev[2], "green"])
    }

    return (
        <div>
            <div className="row">
                <button onClick={changeOne} className="bigtime leftcol">Big Time DJ</button>
                <button onClick={changeTwo} className="bigtime rightcol">Big Time DJ</button>
            </div>
            <div className="row">
                <button onClick={changeThree} className="bigtime leftcol">Big Time DJ</button>
                <button onClick={changeFour} className="bigtime rightcol">Big Time DJ</button>
            </div>
        </div>
    )
}