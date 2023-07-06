import React, { useEffect, useState } from "react";
import "../Styles/List.css";
import User from "./User";
import { Link } from "react-router-dom";
const Paitents = () => {
  const [persons, setPersons] = useState([
    {
      name: "Freead",
      id: 1,
    },
    {
      name: "Tom",
      id: 2,
    },
    {
      name: "Harry",
      id: 3,
    },
    {
      name: "Jack",
      id: 4,
    },

    {
      name: "Snape",
      id: 5,
    },

    {
      name: "Snape",
      id: 6,
    },

    {
      name: "Snape",
      id: 7,
    },

    {
      name: "Snape",
      id: 8,
    },

    {
      name: "Snape",
      id: 9,
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
          <Link to="/Id" >
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
