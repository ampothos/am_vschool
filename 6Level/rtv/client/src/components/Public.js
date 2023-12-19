import React from 'react'
import PostList from './PostList.js'
import { UserContext } from '../context/userProvider.jsx'

export default function Public(){

  const {allPosts} = React.useContext(UserContext)
  return (
    <div className="public">
      <PostList 
        posts = {allPosts}/>
    </div>
  )
}