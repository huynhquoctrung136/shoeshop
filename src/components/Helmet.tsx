/** @format */

import React from "react";
import PropTypes from "prop-types";
type HelmetProps = { title: string; children: React.ReactNode };

const Helmet = (props: HelmetProps) => {
  document.title = "Yolo - " + props.title;
  return <div>{props.children}</div>;
};

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Helmet;
