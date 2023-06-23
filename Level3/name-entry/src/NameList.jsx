import React from "react" 

export default function NameList(props) {
    const names = props.names.map(name => {
        return (
            <li>
                <div className="name">{name}</div>
            </li>
        )
    })

    return (
        <ol className="namelist">
            {names}
        </ol>
    )
}