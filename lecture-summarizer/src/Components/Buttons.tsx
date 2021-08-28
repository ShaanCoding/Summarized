import React from "react";
import { Link } from "react-router-dom";

const Buttons: React.FC<{
  btnURL?: string;
  onClick?: React.MouseEventHandler;
  btnText: string;
}> = (props) => {
  return (
    <div className="button">
      {props.btnURL ? (
        <Link to={props.btnURL}>
          <button type="button">{props.btnText}</button>
        </Link>
      ) : (
        ""
      )}

      {props.onClick ? (
        <button type="button" onClick={props.onClick}>
          {props.btnText}
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Buttons;
