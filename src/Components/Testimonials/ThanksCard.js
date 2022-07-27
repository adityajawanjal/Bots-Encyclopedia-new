import React from "react";
import People from "./ThanksCardList";
import "./ThanksCard.css";

const ThanksCard = () => {
  return (
    <>
      {People.map((e) => {
        return (
          <div className="box1" key={e.h3}>
            <div className="h3">{e.h3}</div>
            <div className="p">{e.p}</div>
            <div className="name">{e.name}</div>
            <div className="position">{e.position}</div>
          </div>
        );
      })}
    </>
  );
};
export default ThanksCard;
