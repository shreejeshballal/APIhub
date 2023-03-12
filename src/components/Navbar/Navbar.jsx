import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
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
          <Link to="/" className="nav-item" onClick={() => setToggle(false)}>
            Home
          </Link>
          <Link
            to="/quote"
            className="nav-item"
            onClick={() => setToggle(false)}
          >
            Quote Generator
          </Link>
          <Link
            to="/joke"
            className="nav-item"
            onClick={() => setToggle(false)}
          >
            Joke Generator
          </Link>
          <Link
            to="/trivia"
            className="nav-item"
            onClick={() => setToggle(false)}
          >
            Trivia Generator
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
