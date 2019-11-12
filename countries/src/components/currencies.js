import React from "react";

function Currency(props) {
  return props.options.map(option => {
    return (
      <div className="mini-container">
        <p>Code: {option.code}</p>
        <p>Name: {option.name}</p>
        <p>Symbol: {option.symbol}</p>
      </div>
    );
  });
}

export default Currency;
