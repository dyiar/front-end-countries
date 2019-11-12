import React from "react";

function Languages(props) {
  return props.options.map(option => {
    return (
      <div className="mini-container">
        <p>Name: {option.name}</p>
        <p>Shortened Version 1: {option.iso639_1}</p>
        <p>Shortened Version 2: {option.iso639_2}</p>
        <p>Native Name: {option.nativeName}</p>
      </div>
    );
  });
}

export default Languages;
