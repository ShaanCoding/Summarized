import React from "react";
import { Link } from "react-router-dom";

const Buttons: React.FC<{ btnURL: string; btnText: string }> = (props) => {
  return (
    <div className="button">
      <Link to={props.btnURL}>
        <button type="button">{props.btnText}</button>
      </Link>
    </div>
  );
};

export default Buttons;
