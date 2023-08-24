import React from "react" 
import axios from "axios"

const Context = React.createContext() 

function ContextProvider(props) {
    const [post, setPost] = React.useState({title : "",
            imgUrl : "",
            description : ""})

    const [postList, setPostList] = React.useState([])

    function changePost(event) {
        const {name, value} = event.target
        setPost(prev => {
            return ({...prev,
                    [name] : value})
        })
    }
        
    const url = "https://api.vschool.io/alainnaamato/thing"
    
    function getPosts(){
        var count = 0
        React.useEffect(() => {
            axios.get(url).then(res=> {
                setPostList(res.data)
            })
            }, [post])
    }
    
    function onSubmit(e) {
        e.preventDefault()
        console.log(post)
        axios.post(url, post)
            .then((res) => {
            console.log(res)
            setPost({title: "", description: "", imgUrl: ""})
        })
            .catch(err => console.log(err))
    }

    getPosts()

    return (
        <Context.Provider
            value = {{post,
                    changePost,
                    postList,
                    setPostList,
                    onSubmit,
                    url,
                    getPosts}}
        >
        {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}