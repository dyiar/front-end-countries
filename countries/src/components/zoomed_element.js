import React from "react";

function Zoomed(props) {
  return (
    <>
      <div>
          hello
        <p>{props.callingCodes}</p>
        <p>{props.currencies}</p>
        <p>{props.languages}</p>
      </div>
    </>
  );
}

export default Zoomed;
