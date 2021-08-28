import React from "react";

const Tag: React.FC<{ tagName: string }> = (props) => {
  return (
    <div className="tag">
      <p>{props.tagName}</p>
    </div>
  );
};

export default Tag;
