import React from "react" 
import Post from "./Post"

export default function PostList(props) {
    const {posts} = props

    const sortedPosts = posts && posts.sort((a, b) => (((b.likedUsers.length - b.dislikedUsers.length) - (a.likedUsers.length - a.dislikedUsers.length)))) 
    console.log(posts)
    console.log(sortedPosts)
    return (
        <div className="post-list">
            {posts && sortedPosts.map(post => 
                <Post {...post} key={post._id}/>
        )}
        </div>
    )
}