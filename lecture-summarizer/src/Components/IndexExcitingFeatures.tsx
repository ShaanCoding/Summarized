import React from "react";

const IndexExcitingFeatures: React.FC<{
  title: string;
  description: string;
  icon: any;
}> = (props) => {
  return (
    <div>
      <div>
        <img src={props.icon} />
      </div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default IndexExcitingFeatures;
