import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h1>Skip lectures without the guilt.</h1>
        <p>
          Welcome to our Lecture Summarizer. Our Lecture Summarizer extracts
          into meaningful and important portions and summarizes content for you.
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
