import { useEffect, useState } from "react";
import "../Styles/List.css";
import User from "./User";
import { Link } from "react-router-dom";
import { getPatients } from "../index";
// var list = await getPatients();
// console.log("list", list);
const Paitents = () => {
  const [persons, setPersons] = useState([
    // list,
    // {
    //   name: "Freead",
    //   id: 1,
    // },
    // {
    //   name: "Tom",
    //   id: 2,
    // },
    // {
    //   name: "Harry",
    //   id: 3,
    // },
    // {
    //   name: "Jack",
    //   id: 4,
    // },

    // {
    //   name: "Snape",
    //   id: 5,
    // },

    // {
    //   name: "Snape",
    //   id: 6,
    // },

    // {
    //   name: "Snape",
    //   id: 7,
    // },

    // {
    //   name: "Snape",
    //   id: 8,
    // },

    // {
    //   name: "Snape",
    //   id: 9,
    // },
  ]);

  // useEffect(() => {
  //   const fetchPersons = async () => {
  //     // const { data } = await getAllUser();
  //     // setPersons(data);
  //   };
  //   fetchPersons();
  // }, []);
  // setPersons(list);
  return (
    <div className="container">
      <h1>Our paitents</h1>
      <div className="card">
        <header className="">
          <h2>Paitents</h2>
          <Link to="/dashboard/patient/90">
            <div className="FollowersCard">
              {/* <form>here{persons && persons.length && persons.map(listItem => listItem)}</form> */}
              {/* return <User person={persons}/>; */}
              {persons &&
                persons.map((person, key) => {
                  return <User person={person} key={key} />;
                })}
            </div>
          </Link>
        </header>
      </div>
    </div>
  );
};

export default Paitents;
