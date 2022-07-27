import React from "react";
import FeatureCard from "./FeatureCard";
import "./Transition.css";

const Transition = () => {
  return (
    <>
      <div className="grid">
        <div className="item1">
          <FeatureCard />
        </div>
        <div className="item2">
          <img
            src="https://images.pexels.com/photos/1229456/pexels-photo-1229456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="phone"
          />
        </div>
        <div className="item3"></div>
      </div>
    </>
  );
};
export default Transition;
