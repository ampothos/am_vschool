import React from "react" 
import PostForm from "./PostForm"
import PostList from "./PostList"
import Post from "./Post"

export default function Profile() {
    return(
        <div className="profile">
            <h1>Welcome @Username</h1>
            <h3>Add A Post</h3>
            <PostForm/>

            <h3>Posts</h3>
        </div>
    )
}