import React from "react";
import Card from "../Card/Card";
import "./OurServices.css";
import BotCard from "./BotCard";
import IntroCard from "../IntroCard/IntroCard";

const OurServices = () => {
  return (
    <>
      <Card title="Our Services" />

      <IntroCard
        h2="Our Services"
        details="Infurious Cyber community provides various services to the users like
          web development , app development , penetration testing , digital
          marketing , OSINT reposts , Graphics designing , freelancing and many
          more .."
      />
      <BotCard />
    </>
  );
};
export default OurServices;
