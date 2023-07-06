// import React from 'react'
import "../Styles/SignIn.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    console.log("handlingSignIn");
    console.log(data);

    try {
      const response = await axios.post("http://localhost:4000/signin", {
        email,
        password,
      });
      console.log(response.data); // handle the response as per your requirement
    } catch (error) {
      console.error(error);
    }
  };

  return (
    
   <>
   <div className='login-main' >
   <div className="login-box">

        <form>
          <p className="title">Login</p>
          <div className="user-box">
            <input
              type="email"
              value={email}
              onChange={handleChangeEmail}
              required
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              value={password}
              onChange={handleChangePassword}
              required
            />
            <label>Password</label>
          </div>
          <center>
            <span onClick={handleSignIn} className="submit">
              Submit
            </span>
          </center>
        </form>
        <div className="navigationLink">
          <p className="signup">
            Don&apos;t have an account?
            <Link to="/Signup">Sign up</Link>
          </p>
        </div>
      </div>
      </div>
   </>
  )
}


export default SignIn;
