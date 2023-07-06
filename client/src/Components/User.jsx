import React, { useState } from "react";
import Profile from "../Images/p.png";
import "../Styles/User.css"

const User = ({ person }) => {
  return (
    <div className="follower">
      <div className="pat">
        <img src={Profile} className="followerImg"   alt="" />
        <div className="name">
          <span>{person.name}</span>
        </div>
      </div>
    </div>
  );
};

export default User;
