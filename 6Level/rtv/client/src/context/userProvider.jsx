import axios from "axios"
import React from "react"

export const UserContext = React.createContext()

export default function UserProvider(props){
    //interceptor, add a header just like in postman
    const userAxios = axios.create()
    userAxios.interceptors.request.use(config => {
        const token = localStorage.getItem("token")
        config.headers.Authorization = `Bearer ${token}`
        return config
    })

    
    const initState = {user : JSON.parse(localStorage.getItem("user")) || {}, 
                        token : localStorage.getItem("token") || "", 
                        posts : []}

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
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prev => ({
                prev,
                user,
                token
            }))
        })
            .catch(err => console.dir(err.response.data))
    }
    
    function logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({user : {}, token : "", posts : []})
    }
    
    //header is in userAxios
    function addPost(newPost) {
        userAxios.post('/api/posts', newPost)
            .then(res => {
                setUserState(prev => ({
                    ...prev,
                    posts : [...prev.posts, res.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    return(
        <UserContext.Provider
            value = {{...userState,
                    signup,
                    login,
                    logout,
                    addPost}}>
            {props.children}
        </UserContext.Provider>
    )
}

