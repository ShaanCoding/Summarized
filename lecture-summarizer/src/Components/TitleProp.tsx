import React from "react";

const TitleProp: React.FC<{ title: string; description: string }> = (props) => {
  return (
    <div className="title">
      <h2>{props.title}</h2>
      <h1>{props.description}</h1>
    </div>
  );
};

export default TitleProp;
