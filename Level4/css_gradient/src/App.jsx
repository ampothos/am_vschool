import { useState } from 'react'
import Wrap from "./components/Wrap"
import ToggleArea from './components/ToggleArea'
import Gradient from './components/Gradient'
import FormattedCode from "./components/FormattedCode"
import './App.css'

function App() {
  const [gradient, setGradient] = useState({angle: 0, color1: "#ff0000", color2: "#ff0000"})

  
  
  return (
    <div className="app">
      <Wrap
        class="gradient">
        <Gradient
          key = {0}
          gradient = {gradient}/>
      </Wrap>
      <Wrap
        class="code">
        <FormattedCode 
          key = {0}
          gradient = {gradient}/> 
      </Wrap>
      <Wrap
      class="togglearea">
        <ToggleArea
          key = {0}
          gradient = {gradient}
          setGradient = {setGradient}
          />
      </Wrap>
    </div>
  )
}

export default App
