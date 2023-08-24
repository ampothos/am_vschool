import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Saved from "./Saved"
import ActivityLog from "./ActivityLog"
import Home from "./Home"
import axios from "axios"
import {v4 as uuidv4} from "uuid"

const BoredContext = React.createContext()

function BoredContextProvider(props) {
    const [activity, setActivity] = React.useState({})
    const [saved, setSaved] = React.useState([])
    // const [log, setLog] = React.useState([])
    const [trigger, setTrigger] = React.useState(false)

    // set the activity state from the random api
    React.useEffect(() => {
        axios.get("https://www.boredapi.com/api/activity")
            .then(res => setActivity({...res.data, key : uuidv4(), isChecked : false}))
            .catch(err => console.log(err))
    }, [trigger])
    
    //set a new activity
    function clickRequestNew() {
        setTrigger(prev => !prev)
    }

    // transfer the activity to the saved list 
    function saveActivity(){
        setSaved(prev => {
            return ([...prev, activity])
        })
        clickRequestNew()
    }

    function markCheck(e) {
        const parent = e.target.parentElement
        const key = parent.id
        parent.classList.toggle("checked")
        
        
        setSaved(prev => {
            console.log(prev)
            return (prev.map(item => {
                console.log(item)
                if (item.key === key){
                    
                    return{...item,
                            isChecked : e.target.checked
                    }
                }
                return item
        }))
        })
    }
    return (
        <BoredContext.Provider
            value = {{activity,
                        saved,
                        setSaved,
                        saveActivity,
                        markCheck,
                        clickRequestNew}}>
        
            <Router>
                <div className="header">What should I do?</div>
                <nav>
                    <Link className="navlink" to="/">Home</Link>
                    <Link className="navlink" to="/saved">Saved</Link>
                </nav>

                
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/saved" element={<Saved/>}/>
                    <Route path="/activity" element={<ActivityLog/>}/>
                </Routes>
            </Router>
            {props.children}
            <footer>Footer</footer>
        </BoredContext.Provider>
    )
}

export {BoredContext, BoredContextProvider}