import React from "react" 
import Comments from "./Comments"
import { UserContext } from "../context/userProvider"

export default function Post(props) {
    const {title, body, imgUrl, _id, likedUsers, dislikedUsers} = props
    const {user, postNewComment, upVote, downVote} = React.useContext(UserContext)
    const initComment = {text : "",
                        user : user._id,
                        post : _id}
    const [comment, setComment] = React.useState(initComment)

    function handleChange(e){
        const {name, value} = e.target
        setComment(prev => ({
          ...prev,
          [name] : value
        }))
      }
    
      function handleSubmit(e){
        e.preventDefault()
        postNewComment(comment, _id)
        setComment(initComment)  
      }
    
      function upVoteWithId(){
        upVote(_id)
      }

      function downVoteWithId(){
        downVote(_id)
      }
    return (
        <div className="post-and-comments">
            <div className="post-container"> 
                <div className="votes">
                    <button className="upVotes"
                            onClick={upVoteWithId}>Upvote</button>
                            <div className="vote-count">{likedUsers.length - dislikedUsers.length}</div>
                    <button className="downVotes"
                            onClick={downVoteWithId}>Downvote</button>
                </div>
                <div className="post">
                    <h1 className="post-title">{title}</h1>
                    <h3 className="post-body">{body}</h3>
                    <img src = {imgUrl} alt={imgUrl} width={300}></img>
                </div>
            </div>
            <div className="comment-container">
                <Comments
                    _id = {_id}
                    key = {_id}/>
                <form className="add-comment"
                    onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    name="text" 
                    value={comment.text} 
                    onChange={handleChange} 
                    placeholder="Title"/>
                    <button className="submit">Post Comment</button>
                </form>
            </div>
        </div>
    )
}