import React from "react" 
import PostForm from "./PostForm"
import PostList from "./PostList"
import { UserContext } from "../context/userProvider"

export default function Profile() {
    const {user : {username}, addPost, posts} = React.useContext(UserContext)
    // const con = React.useContext(UserContext)
    // console.log(con.posts)
   
    return(
        <div className="profile">
            <h1>Welcome @{username}</h1>
            <h3>Add A Post</h3>
            <PostForm
            addPost = {addPost}/>

            <div className="posts">
                <h3>Posts</h3>
                <PostList posts = {posts}/>
            </div>
        </div>
    )
}