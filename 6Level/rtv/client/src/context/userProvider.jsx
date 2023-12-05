import axios from "axios"
import React from "react"

export const UserContext = React.createContext()

export default function UserProvider(props){
    const initState = {user : {}, 
                        token : "", 
                        todos : []}

    const [userState, setUserState] = React.useState(initState)

   
    function signup(creds) {
        axios.post("/auth/signup", creds)
            .then(res => {
                const {user, token} = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prev => ({
                    ...prev,
                    user,
                    token
                }))
            })
            .catch(err => console.dir(err.response.data))
    }

    function login(creds) {
        axios.post("/auth/login", creds)
            .then(res => console.log(res))
            .catch(err => console.dir(err.response.data))
    }
    
    return(
        <UserContext.Provider
            value = {{...userState,
                    signup,
                    login}}>
            {props.children}
        </UserContext.Provider>
    )
}

