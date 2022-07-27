import React from "react";
import Card from "../Card/Card";
import IntroCard from "../IntroCard/IntroCard";
import ContactCard from "./ContactCard";
import ContactInfo from "./ContactInfo";

const ContactUs = () => {
  return (
    <>
      <Card title="Contact Us" />
      <IntroCard h2="Get in Touch" details="It is a awesome website to load." />
      <ContactCard />
      <ContactInfo />
    </>
  );
};
export default ContactUs;
