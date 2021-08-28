import React from "react";

const Content: React.FC<{}> = (props) => {
  return <div className="content">{props.children}</div>;
};

export default Content;
