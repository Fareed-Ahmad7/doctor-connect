// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import SignIn from "./Common/SignIn";
import SignUp from "./Common/SignUp";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Common/LandingPage";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import Paitents from "./Components/Paitents";
import Dashboard from "./Components/Dashboard"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/SignUp" Component={SignUp} />
        <Route path="/SignIn" Component={SignIn} />
        <Route path="/list" Component={Paitents} />
        <Route path="/dashboard/:id" Component={Dashboard} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
