import React from "react";

const InlineFlexbox: React.FC<{}> = (props) => {
  return (
    <div className="inline-flexbox">
      <div>{props.children}</div>
    </div>
  );
};

export default InlineFlexbox;
