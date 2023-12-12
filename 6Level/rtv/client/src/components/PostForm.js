import React, { useState } from 'react'

const initInputs = {
  title: "",
  body: "",
  imgUrl: ""
}

export default function PostForm(props){
  const [inputs, setInputs] = useState(initInputs)
  const {addPost} = props

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    addPost(inputs)
    setInputs(initInputs)  
  }

  const { title, body, imgUrl } = inputs
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="title" 
        value={title} 
        onChange={handleChange} 
        placeholder="Title"/>
      <input 
        type="text" 
        name="body" 
        value={body} 
        onChange={handleChange} 
        placeholder="Description"/>
      <input 
        type="text" 
        name="imgUrl" 
        value={imgUrl} 
        onChange={handleChange} 
        placeholder="Image Url"/>
      <button>Add Post</button>
    </form>
  )
}