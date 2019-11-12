import React from "react";

function CallingCodes(props) {
  return props.options.map(option => {
    return (
      <div className="mini-container">
        <p>{option}</p>
      </div>
    );
  });
}

export default CallingCodes;
