import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'
import { UserContext } from './context/userProvider.jsx'
import ProtectedRoute from './components/ProtectedRoute.js'

export default function App(){

  const {token, logout} = React.useContext(UserContext)

  // React.useEffect(() => {
  //   getAllComments()
  // }, [])

  return (
    <div className="app">
      <Navbar logout={logout} token = {token}/>
      <Routes>
        <Route 
          path="/" 
          element={token ? <Navigate to="/profile"/> : <Auth />}
        />
        <Route 
          path="/profile"
          element={<ProtectedRoute token={token} redirectTo="/">
              <Profile/>
          </ProtectedRoute>}
        />
        <Route 
          path="/public"
          element={ <ProtectedRoute token={token} redirectTo="/">
              <Public/>
          </ProtectedRoute>}
        />
      </Routes>
    </div>
  )
}
