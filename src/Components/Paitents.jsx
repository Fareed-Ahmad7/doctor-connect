import { useEffect, useState } from "react";
import "../Styles/List.css";
import User from "./User";
import { Link } from "react-router-dom";
import { getPatients } from "../index";
// var list = await getPatients();
// console.log("list", list);
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
          <Link to={`/dashboard/6BcSVfuVzLqmBdtDEB1J`}>
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
