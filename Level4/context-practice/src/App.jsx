import { useState } from 'react'
import Navbar from './components/Navbar'
import Blurb from './components/Blurb'
import Button from './components/Button'
import Footer from './components/Footer'
import {ThemeContextProvider} from './themeContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeContextProvider>
      <Navbar/>
      <Blurb/>
      <Button/>
      <Footer/>
    </ThemeContextProvider>
  )
}

export default App
