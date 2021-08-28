import React from "react";

const IndexGrid: React.FC<{ title: string; description: string; icon: any }> = (
  props
) => {
  return (
    <div className="exciting-new-features-logo">
      <div>
        <img src={props.icon} alt="logo" />
      </div>
      <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default IndexGrid;
