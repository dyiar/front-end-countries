import React from "react";
import { Link } from "react-router-dom";

function Display(props) {
  return (
    <Link to={`/country/${props.country_name}`} className="display-box">
      <p>{props.country_name}</p>
      <p>{props.capital}</p>
      <p>{props.region}</p>
      <p>{props.subregion}</p>
    </Link>
  );
}

export default Display;
