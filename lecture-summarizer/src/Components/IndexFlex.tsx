import React from "react";

const IndexFlex: React.FC<{ title: string; description: string }> = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default IndexFlex;
