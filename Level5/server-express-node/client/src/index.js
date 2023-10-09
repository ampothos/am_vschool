import React from "react"
import ReactDOM from 'react-dom/client'
import App from "./App"
import './styles.css'

//proxy takes care of request to server, don't need to state url
//axios.get("/movies")
//must say whole url if external url 

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )