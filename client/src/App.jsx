import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignIn from "./Common/SignIn";
import SignUp from "./Common/SignUp";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Common/LandingPage";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div>
    <Navbar />
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/signin" Component={SignIn} />
        <Route path="/dashboard" Component={Dashboard}/>
      </Routes>
      <Footer />
    </div>

  );
}

export default App;

