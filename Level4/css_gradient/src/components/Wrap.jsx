import React from "react"

export default function Wrap(props) {
    return (
        <div className={`wrap ${props.class}`}>
            {props.children}
        </div>
    )
}