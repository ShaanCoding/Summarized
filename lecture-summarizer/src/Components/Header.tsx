import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h1>Skip lectures without the guilt.</h1>
        <p>
          Welcome to our Summarized. Our Lecture Summarizer extracts info into
          meaningful and important key-themes, making studying hassle & guilt
          free.
        </p>

        <Link to="/appMain">
          <button>Get Started</button>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
