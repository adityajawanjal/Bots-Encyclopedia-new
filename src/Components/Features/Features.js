import React from "react";
import Card from "../Card/Card";
import IntroCard from "../IntroCard/IntroCard";
import Transition from "./Transition";

const Features = () => {
  return (
    <>
      <Card title="Features" />
      <IntroCard
        h2=" Features"
        details="Infurious Cyber community provides various services to the users like
          web development , app development , penetration testing , digital
          marketing , OSINT reposts , Graphics designing , freelancing and many
          more .."
      />
      <Transition />
    </>
  );
};
export default Features;
