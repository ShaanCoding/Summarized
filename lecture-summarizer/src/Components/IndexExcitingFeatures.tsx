import React from "react";
import Timer from "../Images/timer.svg";

const IndexExcitingFeatures: React.FC<{ title: string; description: string }> =
  (props) => {
    return (
      <div>
        <div>
          <img src={Timer} />
        </div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    );
  };

export default IndexExcitingFeatures;
