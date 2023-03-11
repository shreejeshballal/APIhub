import React from "react";
import { Link } from "react-router-dom"; 
const Error = () => {
  
  return (
    <div className="container">
      <div className="header">
        <h2>ERROR 404 </h2>
        <h1>Page not found!</h1>
        <p>
          Got lost ? It's okay ! Just click on the button below to redirect to
          home...
        </p>
        <Link to="/">
          <button className="redirect">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
