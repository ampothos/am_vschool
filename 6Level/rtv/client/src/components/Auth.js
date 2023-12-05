import React, {useContext} from "react" 
import AuthForm from "./AuthForm.js"
import { UserContext } from "../context/userProvider.jsx"

const initInputs = { username: "", password: "" }


export default function Auth() {
    // set starter input values and toggle off 
    const [inputs, setInputs] = React.useState(initInputs)
    const [toggle, setToggle] = React.useState(false)

    const con = useContext(UserContext)

    // changes state as input is typed
    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prev => {
            return {...prev,
                    [name] : value}})}

    function handleSignup(e) {
        e.preventDefault()
        con.signup(inputs)
        
    }

    function handleLogin(e) {
        e.preventDefault()
        con.login(inputs)
        
    }


return (
    <div className="auth-container"> 
        <h1>Rock the Vote</h1>
        { !toggle ? 
            <>
          <AuthForm 
            handleChange={handleChange}
            handleSubmit={handleSignup}
            inputs={inputs}
            buttonText="Sign up"
          />
          <p onClick={() => setToggle(prev => !prev)}>Already a member?</p>
        </>
      :
        <>
          <AuthForm 
            handleChange={handleChange}
            handleSubmit={handleLogin}
            inputs={inputs}
            buttonText="Login"
          />
          <p onClick={() => setToggle(prev => !prev)}>Not a member?</p>
        </>}
    </div>
)}