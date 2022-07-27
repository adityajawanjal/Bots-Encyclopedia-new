import React from "react";
import "./ContactCard.css";
import ListEle from "./List";

const ContactCard = () => {
  return (
    <>
      {ListEle.map((e) => {
        return(
          <div className="contact" key={e.id}>
          <label htmlFor={e.type}>{e.label}</label>
          <input type={e.type} id={e.type} />
        </div>
        )
      })}
    </>
  );
};
export default ContactCard;
