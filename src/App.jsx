import React from 'react'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import UserContextProvider from './context/UserContextProvider'

function App() {
  
  return (
    <UserContextProvider>

     <NavBar/>
     <Outlet/>
   
    </UserContextProvider>
  )
}

export default App
