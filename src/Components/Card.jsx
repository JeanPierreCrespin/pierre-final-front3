import React from "react";
import { Link } from "react-router-dom";
import { useDentistStates } from "./utils/global.context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Card = ({ name, username, id }) => {
  const { favDispatch, apiState } = useDentistStates();

  const addFav = () => {
    favDispatch({ type: "ADD_FAV", payload: apiState.dentistList });
  };

  return (
    <div className="card" key={id}>
      <img className="doctor-img" src="./images/doctor.jpg" alt="DH-logo" />
      <h3>{id}</h3>
      <h2>{name}</h2>
      <h3>{username}</h3>
      <Link key={id} to={"/dentista/" + id}>
        Details
      </Link>
      <button onClick={addFav} className="favButton">
      <FontAwesomeIcon icon={faStar} size="2xl" style={{color: "#ebf924", fontSize:"40px"}} />
      </button>
    </div>
  );
};

export default Card;
