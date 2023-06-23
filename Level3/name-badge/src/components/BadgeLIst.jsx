import React from "react" 
import Badge from "./Badge"

export default function BadgeList(props) {
    const badges = props.badges.map(profile => {
        return (<Badge
                    key = {Math.random() * 10}
                    {...profile}
                />)
    })

    return (
        <div className="badgelist">
            {badges}
        </div>
    )
}