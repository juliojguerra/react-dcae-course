import React from "react";
import PropTypes from "prop-types";

const SmallComponent = ({ value }) => {
  console.log("I am here again");

  return <small> {value}</small>;
};

SmallComponent.propTypes = {
  value: PropTypes.any.isRequired,
};

export const Small = React.memo(SmallComponent);
