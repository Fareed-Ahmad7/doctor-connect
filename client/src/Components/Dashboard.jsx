import React from "react";
import "../Styles/Dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard-main">
      <div className="left-vitals">
        <div className="main-vitals">
          <div className="vital BP">
            <div className="vital-count">
              <h1>BP : {"90"}</h1>
            </div>
            <div className="vital-graph">
              <h1>graph</h1>
              <h1>graph</h1>
              <h1>graph</h1>
              <h1>graph</h1>
            </div>
          </div>
          <div className="vital HR">
          <div className="vital-count">
              <h1>BP : {"90"}</h1>
            </div>
            <div className="vital-graph">
              <h1>graph</h1>
              <h1>graph</h1>
              <h1>graph</h1>
              <h1>graph</h1>
            </div>
          </div>
          <div className="vital TEMP">
          <div className="vital-count">
              <h1>BP : {"90"}</h1>
            </div>
            <div className="vital-graph">
              <h1>graph</h1>
              <h1>graph</h1>
              <h1>graph</h1>
              <h1>graph</h1>
            </div>
          </div>
        </div>

        <div className="patient-current-feeling">
            <h1>i am feeling better today than yesterday</h1>
        </div>
      </div>
      <div className="dashboard-right-bio">
        <img className="dash-profile-img" src="" alt="" />
        <ul>
          <li className="bio-list">Name : {"sharmas"}</li>
          <li className="bio-list">Age : {"20"}</li>
          <li className="bio-list">Gender : {'M'}</li>
          <li className="bio-list">Disease : {"Kidney problem"}</li>
          <li className="bio-list">prescrtipn : {"something"}</li>
          <li className="bio-list">Date : {"06/06/2023"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
