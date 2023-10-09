import React from "react"
import { ContextProvider,  Context} from "../context"
import ListItem from "./ListItem"

export default function UglyList(props) {
    const con = React.useContext(Context)
    var posts = con.postList
    console.log(posts)
    const ugList = posts.map(post => {
        return (<ListItem
                    key = {post._id}
                    value = {post}/>)
    })
    return (
        <ul className="list">
            {ugList}
        </ul>
    )
}