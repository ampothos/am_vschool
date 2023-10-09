import React from 'react'
import {BoredContextProvider, BoredContext} from './components/boredContext'
import Home from './components/Home'

function App() {
  const con = React.useContext(BoredContext)


  return (
    <div className="app">
      <BoredContextProvider/>
        
    </div>
  )
}

export default App
