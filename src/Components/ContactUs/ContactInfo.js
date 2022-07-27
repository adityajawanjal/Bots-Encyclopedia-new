import React from "react";
import "./ContactInfo.css";
import InfoList from "./ContactInfoList";

const ContactInfo = () => {
  return (
    <>
      <div className="outer-box">
        {InfoList.map((e) => {
          return (
            <div className="sqbox">
              <div className="h4">{e.h4}</div>
              <div className="details">{e.details}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ContactInfo;
