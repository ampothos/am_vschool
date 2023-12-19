import React from "react" 
import { UserContext } from "../context/userProvider"

export default function Comments(props) {
    const {comments} = React.useContext(UserContext)

    const commentList = comments.map(comment => {
     
        if(comment.post === props._id) {
            return (
                <li key={comment._id}>
                    <div className="comment"
                        >{comment.text}</div>
                </li>
            )
        }
    })
    return (
        <ul className="comments">
            {commentList}
        </ul>
    )
}