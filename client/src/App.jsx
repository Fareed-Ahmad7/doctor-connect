// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import SignIn from './Common/SignIn'
import SignUp from './Common/SignUp'
import {Routes,Route} from "react-router-dom"

import Paitents from "./Components/Paitents";

import Id from "./Components/Id";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={SignIn} />
        <Route path="/SignUp" Component={SignUp} />
        <Route path="/SignIn" Component={SignIn} />

        <Route path="/p" Component={Paitents} />
        <Route path="/D" Component={Id}/>
      </Routes>
    </>
  );
}

export default App;
