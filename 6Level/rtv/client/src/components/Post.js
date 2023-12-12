import React from "react" 

export default function Post(props) {
    const {title, body, imgUrl, _id} = props
    return (
        <div className="post"> 
            <h1>{title}</h1>
            <h3>{body}</h3>
            <img src = {imgUrl} alt={imgUrl} width={300}></img>
        </div>
    )
}