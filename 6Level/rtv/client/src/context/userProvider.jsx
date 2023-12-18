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
                        posts : JSON.parse(localStorage.getItem("posts")) || [],
                        errMsg : ""}

    const [userState, setUserState] = React.useState(initState)
    const [comments, setComments] = React.useState([])

    function handleAuthError(errMsg) {
        setUserState(prevState => ({
            ...prevState,
            errMsg
        })   
    )}

    function getUserPosts(){
        userAxios.get("/api/posts/user")
          .then(res => {
            localStorage.setItem("posts", JSON.stringify(res.data))
            setUserState(prevState => ({
              ...prevState,
              posts: res.data
            }))
          })
          .catch(err => handleAuthError(err.response.data.errMsg))
      }
    
      function getAllComments() {
        userAxios.get("/api/comments/") 
            .then(res => {
                
                setComments(res.data)
            })
            .catch(err => console.log(err.response.data.errMsg))
      }

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
            .catch(err => handleAuthError(err.response.data.errMsg))
    }

    function login(creds) {
        axios.post("/auth/login", creds)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            getUserPosts()
            setUserState(prev => ({
                prev,
                user,
                token
            }))
            
        })
            .catch(err => handleAuthError(err.response.data.errMsg))
    }
    
    function logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        localStorage.removeItem("posts")
        setUserState({user : {}, token : "", posts : []})
    }

    function resetAuthErr() {
        setUserState(prevState => ({
            ...prevState,
            errMsg : ""
        }))
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
            .catch(err => handleAuthError(err.response.data.errMsg))
    }
    return(
        <UserContext.Provider
            value = {{...userState,
                    comments,
                    signup,
                    login,
                    logout,
                    addPost,
                    getAllComments,
                    resetAuthErr}}>
            {props.children}
        </UserContext.Provider>
    )
}

