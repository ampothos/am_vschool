import React from "react" 

export default function AuthForm(props) {
    const {
        handleChange,
        handleSubmit,
        buttonText,
        inputs : {
            username, 
            password
        }
    } = props

return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={username} 
        name="username" 
        onChange={handleChange} 
        placeholder="Username"/>
      <input 
        type="text" 
        value={password} 
        name="password" 
        onChange={handleChange} 
        placeholder="Password"/>
      <button>{ buttonText }</button>
    </form>
  )
}