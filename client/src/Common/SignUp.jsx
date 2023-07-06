import React from "react";
import "../Styles/SignUp.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [selectedRole, setSelectedRole] = useState("");

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };
  return (
    <>
      <div className="SignUp-Form">
        <form className="signUpForm">
          <p className="title">Register </p>
          <p className="message">Signup now and get full access to our app. </p>
          <div className="flex">
            <label>
              <input required placeholder type="text" className="input" />
              <span>Firstname</span>
            </label>
            <label>
              <input required placeholder type="text" className="input" />
              <span>Lastname</span>
            </label>
          </div>
          <label>
            <input required placeholder type="email" className="input" />
            <span>Email</span>
          </label>
          <label>
            <input required placeholder type="password" className="input" />
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

          <button className="submit">Submit</button>
          <p className="signin">
            Already have an acount ? <Link to="/SignIn">Signin</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
