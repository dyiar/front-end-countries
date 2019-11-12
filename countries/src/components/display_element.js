import React from "react";
import { Link } from 'react-router-dom';
import Zoomed from './zoomed_element';

function Display(props) {

  return (
      <div onClick={() => props.changeName(props.country_name)} className="display-box">
        <p>{props.country_name}</p>
        <p>{props.capital}</p>
        <p>{props.region}</p>
        <p>{props.subregion}</p>
      </div>
  );
}

export default Display;
