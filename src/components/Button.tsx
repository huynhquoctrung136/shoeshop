/** @format */

import React from "react";
import PropTypes from "prop-types";
type ButtonProps = {
  backgroundColor: string;
  size: string;
  animate: boolean;
  children: React.ReactNode
  icon: string;
};

const Button = (props: ButtonProps) => {
  const bg = props.backgroundColor ? "bg-" + props.backgroundColor : "bg-main";

  const size = props.size ? "btn-" + props.size : "";

  const animate = props.animate ? "btn-animate" : "";

  return (
    <button className={`btn ${bg} ${size} ${animate}`}>
      <span className="btn__txt">{props.children}</span>
      {props.icon ? (
        <span className="btn__icon">
          <i className={`${props.icon} bx-tada`}></i>
        </span>
      ) : null}
    </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  animate: PropTypes.bool,
};
export default Button;
