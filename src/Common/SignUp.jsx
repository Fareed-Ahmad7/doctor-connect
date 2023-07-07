// import React from "react";
import "../Styles/SignUp.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FirebaseSignup } from "../index";


const SignUp = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangefirstName = (e) => {
    setfirstName(e.target.value);
  };

  const handleChangelastName = (e) => {
    setlastName(e.target.value);
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    await FirebaseSignup(email,password,firstName,lastName,selectedRole)

  };
  return (
    <>
      <div className="SignUp-Form">
        <form className="signUpForm">
          <p className="title">Register </p>
          <p className="message">Signup now and get full access to our app. </p>
          <div className="flex">
            <label>
              <input
                required
                placeholder
                type="text"
                name="firstName"
                className="input"
                value={firstName}
                onChange={handleChangefirstName}
              />
              <span>Firstname</span>
            </label>
            <label>
              <input
                required
                placeholder
                type="text"
                name="lastName"
                className="input"
                value={lastName}
                onChange={handleChangelastName}
              />
              <span>Lastname</span>
            </label>
          </div>
          <label>
            <input
              required
              placeholder
              type="email"
              name="email"
              className="input"
              value={email}
              onChange={handleChangeEmail}
            />
            <span>Email</span>
          </label>
          <label>
            <input
              required
              placeholder
              type="password"
              name="password"
              className="input"
              value={password}
              onChange={handleChangePassword}
            />
            <span>Password</span>
          </label>
          <div className="Users">
            <label>
              <input
                type="radio"
                value="doctor"
                checked={selectedRole === "doctor"}
                onChange={handleRoleChange}
              />
              Doctor
            </label>
            <label>
              <input
                type="radio"
                value="patient"
                checked={selectedRole === "patient"}
                onChange={handleRoleChange}
              />
              Patient
            </label>
          </div>

          <button onClick={handleSignUp} className="submit">
            Submit
          </button>
          <p className="signin">
            Already have an acount ? <Link to="/SignIn">Signin</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
