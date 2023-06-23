import React from "react"
import './App.css'
import Square from "./components/Square"
import Buttons from "./components/Buttons"

function App() {
  const [squares, setSquares] = React.useState(["white", "white", "white", "white"])

  let count = 0
  const squareComponents = squares.map(col => {
    count++
    return <Square 
              id = {count}
              color = {col} />
  })

  return (
  <div>
    <div className="squares">
    {squareComponents}
    </div>
      <Buttons
          setFunc = {setSquares}
      />
  </div>
    


  )
}

export default App
