import React from "react"

export default function BlogPost(props) {
    return (
        <div className="post">
            <div className="post-group">
                <div className="post-title">{props.title}</div>
                <div className="post-subtitle">{props.subtitle}</div>
            </div>
            <div className="post-data">
                Posted by <span className="post-author">{props.author}</span> on {props.date}
            </div>
            
        </div>
    )
}