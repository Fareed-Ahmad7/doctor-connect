import React, { useState,useEffect } from "react";
import "../Styles/Dashboard.css";
import s from "../assets/s.jpg"
import c from "../assets/chart.png"
import h from "../assets/Hr.png"
import t from "../assets/temperature.png"
import { useParams } from 'react-router-dom';
import { getDashboardData } from "../index";

const Dashboard = () => {
  // let UserData 
  const {id} = useParams();
  console.log(id)
     const [UserData, setUserData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const UserData = await getDashboardData(id);
      //  UserData.then(function(result) {
        //     });
        
           console.log(UserData); // "Some User token"
          setUserData(UserData)
        };
        
        fetchData();
      },[]);
      
  return (
    <div className="dashboard-main">
      <div className="left-vitals">
        <div className="main-vitals">
          <div className="vital BP">
            <div className="vital-count">
              <h2>Blood Pressure : {UserData.blood_pressure}</h2>
            </div>
            <div className="vital-graph">
              <img src={c} className="bpchart" alt="" />
            </div>
          </div>
          <div className="vital HR">
            <div className="vital-count">
              <h2>Heart Rate : {UserData.heart_beat}</h2>
            </div>
            <div className="vital-graph">
              <img src={h} alt="" />
            </div>
          </div>
          <div className="vital TEMP">
            <div className="vital-count">
              <h2>Temperature : {UserData.temperature}</h2>
            </div>
            <div className="vital-graph">
              <img src={t} alt="" />
            </div>
          </div>
        </div>

        <div className="patient-current-feeling">
          <h1>{UserData.mood}</h1>
        </div>
      </div>
      <div className="dashboard-right-bio">
        <img className="dash-profile-img" src={s} alt="" />
        <ul>
          <li className="bio-list">Name : {UserData.name}</li>
          <li className="bio-list">Age : {UserData.age}</li>
          <li className="bio-list">Gender : {UserData.gender}</li>
          <li className="bio-list">Disease : {UserData.illness}</li>
          <li className="bio-list">prescrtion : {UserData.prescription}</li>
          <li className="bio-list">Date : {UserData.date}</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
