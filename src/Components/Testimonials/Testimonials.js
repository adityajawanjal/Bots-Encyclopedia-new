import React from "react";
import Card from "../Card/Card";
import IntroCard from "../IntroCard/IntroCard";
import ThanksCard from "./ThanksCard";

const Testimonials = () => {
  return (
    <>
      <Card title="Testimonials" />
      <IntroCard
        h2="Testimonials"
        details="We thanks for all our awesome testimonials! There are hundreds of our happy Visitors!
Let's see what others say about Infurious Cyber Community!"
      />
      <ThanksCard />
    </>
  );
};
export default Testimonials;
