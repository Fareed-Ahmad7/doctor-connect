import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignIn from './Common/SignIn'
import SignUp from './Common/SignUp'
import {Routes,Route} from "react-router-dom"


function App() {
 

  return (
    <>
     <Routes>
      <Route   path="/" Component={SignIn}/>
      <Route   path="/SignUp" Component={SignUp}/>
      <Route   path="/SignIn" Component={SignIn}/>
     
      </Routes>
    </>
  )
}

export default App
