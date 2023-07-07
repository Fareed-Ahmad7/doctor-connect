import React, { useEffect, useState } from "react";
import "../Styles/List.css";
import User from "./User";
import { Link } from "react-router-dom";
const Paitents = () => {
  const [persons, setPersons] = useState([
    {
      name: "John",
      id: "6BcSVfuVzLqmBdtDEB1J",
    },
    {
      name: "Chandu",
      id: "chanduid",
    },
  ]);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);
  return (
    <div className="container">
      <h1>Our paitents</h1>
      <div className="card">
        <header className="">
          <h2>Paitents</h2>
          <Link to="/dashboard/patient/90" >
          <div className="FollowersCard">
            {persons &&
              persons.map((person, id) => {
                return <User person={person} key={id} />;
              })}
          </div>
          </Link>
        </header>
      </div>
    </div>
  );
};

export default Paitents;
