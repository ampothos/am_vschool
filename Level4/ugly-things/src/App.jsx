import { useState } from 'react'
import { Context, ContextProvider } from './context'
import UglyForm from './components/UglyForm'
import UglyList from './components/UglyList'

import './App.css'
import List from './components/UglyList'

function App() {

  return (
    <>
      <ContextProvider>
        <UglyForm/>
        <UglyList/>
      </ContextProvider>
    </>
  )
}

export default App
