import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="info">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            fugit iusto quasi et, blanditiis quisquam similique quidem inventore
            qui! Error consectetur numquam aliquid cupiditate culpa natus esse
            aliquam officiis quas?
          </div>
          <div className="suscribe">Suscribe to our Newsletter !</div>
          <div className="mail">
            <input type="email" placeholder="Suscribe our Newsletter" />
          </div>
        </div>
        <div className="copyright">
          All Rights are Reserved . &copy; CopyRight.
        </div>
      </div>
    </>
  );
};
export default Footer;
