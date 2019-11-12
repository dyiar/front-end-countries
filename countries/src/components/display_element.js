import React from "react";

function Display(props) {
  return (
    
      <div onClick={() => props.history.push(`/country/${props.country_name}`)} className="display-box">
        <p>{props.country_name}</p>
        <p>{props.capital}</p>
        <p>{props.region}</p>
        <p>{props.subregion}</p>
      </div>
  );
}

export default Display;
