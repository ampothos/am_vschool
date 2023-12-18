import React from "react" 
import Post from "./Post"

export default function PostList(props) {
    const {posts} = props
    return (
        <div className="post-list">
            {posts && posts.map(post => 
                <Post {...post} key={post._id}/>
        )}
        </div>
    )
}