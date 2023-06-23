import React from "react"

export default function Square(props) {
    const styles = {backgroundColor: props.color}
    const className = "square"
    return (
        <div className={className} style={styles}></div>
    )
}