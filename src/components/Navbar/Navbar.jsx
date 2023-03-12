import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Navbar = (props) => {
  return (
    <>
      <GiHamburgerMenu
        className={`${props.toggle ? "ham " : "ham active"}`}
        onClick={props.onToggle}
      />
      <div className={`${props.toggle ? "navbar" : "navbar dead"}`}>
        <div className="top-bar">
          <div className="title">APIHUB</div>
          <GrClose className="close" onClick={props.onToggle} />
        </div>

        <div className="nav-items">
          <NavLink to="/" className="nav-item" onClick={props.onToggle}>
            Home
          </NavLink>
          <NavLink to="/quote" onClick={props.onToggle} className="nav-item">
            Quote Generator
          </NavLink>
          <NavLink to="/joke" className="nav-item" onClick={props.onToggle}>
            Joke Generator
          </NavLink>
          <NavLink to="/trivia" className="nav-item" onClick={props.onToggle}>
            Trivia Generator
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
