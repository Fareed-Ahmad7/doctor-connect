import React from "react";
import "../Styles/List.css";
import p from "../Images/p.png"

const List = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <header>
            <h1>List of paitents</h1>
          </header>
          <div className="pt">
            <div className="p1">
              <h2>Jhon</h2>
            </div>
            <div className="p1">
              <h2>Harry</h2>
            </div>
            <div className="p1">
              <h2>Mark</h2>
            </div>
          </div>
        </div>
        <img src={p} className="img" alt="" />
      </div>
    </>
  );
};

export default List;
