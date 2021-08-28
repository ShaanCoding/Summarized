import React from "react";
import Timer from "../Images/timer.svg";

const IndexGrid: React.FC<{ title: string; description: string }> = (props) => {
  return (
    <div className="exciting-new-features-logo">
      <div>
        <img src={Timer} alt="logo" />
      </div>
      <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default IndexGrid;
