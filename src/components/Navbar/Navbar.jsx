import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <GiHamburgerMenu
        className={`${toggle ? "ham " : "ham active"}`}
        onClick={() => setToggle(true)}
      />
      <div className={`${toggle ? "navbar" : "navbar dead"}`}>
        <div className="top-bar">
          <div className="title">APIHUB</div>
          <GrClose className="close" onClick={() => setToggle(false)} />
        </div>

        <div className="nav-items">
          <NavLink to="/" className="nav-item" onClick={() => setToggle(false)}>
            Home
          </NavLink>
          <NavLink
            to="/quote"
            onClick={() => setToggle(false)}
            className="nav-item"
          >
            Quote Generator
          </NavLink>
          <NavLink
            to="/joke"
            className="nav-item"
            onClick={() => setToggle(false)}
          >
            Joke Generator
          </NavLink>
          <NavLink
            to="/trivia"
            className="nav-item"
            onClick={() => setToggle(false)}
          >
            Trivia Generator
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
