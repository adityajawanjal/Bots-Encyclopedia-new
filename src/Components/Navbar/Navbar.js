import React from "react";
import "./Navbar.css";
import List from "./NavlList";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="left-logo-side">
          <img
            src="https://images.pexels.com/photos/35016/soap-bubble-colorful-ball-soapy-water.jpg"
            alt="Ball"
          />
          <ul>
            <li>WEB Dev</li>
          </ul>
          <span>
            <i className="fa-solid fa-bars"></i>
          </span>
        </div>
        <div className="right-pages-link">
          {List.map((e) => {
            return (
              <li key={e.name}>
                <NavLink to={"/" + e.name}>{e.name}</NavLink>
              </li>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Navbar;
