import React from "react";
import "./FeatureCard.css";
import Features from "./FeatureCardDetails";

const FeatureCard = () => {
  return (
    <>
      {Features.map((e) => {
        return (
          <div className="cardBox" key={e.h3}>
            <div className="h3">{e.h3}</div>
            <div className="detail">{e.detail}</div>
          </div>
        );
      })}
    </>
  );
};
export default FeatureCard;
