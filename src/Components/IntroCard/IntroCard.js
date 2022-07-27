import React from "react";

const IntroCard = (props) => {
  return (
    <>
      <div className="know">
        <h2>{props.h2}</h2>
        <p>{props.details}</p>
        <button type="button">Learn more</button>
      </div>
    </>
  );
};
export default IntroCard;
