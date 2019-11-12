import React from "react";

function Zoomed(props) {
    // console.log(props.match.params.name)
  return (
    <>
      <div>
        hello
        <p onClick={() => props.history.push('/')}>back</p>
        <p>{props.callingCodes}</p>
        <p>{props.currencies}</p>
        <p>{props.languages}</p>
      </div>
    </>
  );
}

export default Zoomed;
