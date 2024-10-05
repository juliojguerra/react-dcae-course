import React from "react";
import PropTypes from "prop-types";

export function FirstApp({
  title = "Default Title",
  subtitle = "Default Subtitle",
  name = "Default Name",
}) {
  return (
    <div>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subtitle}</p>
      <p>{name}</p>
    </div>
  );
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  name: PropTypes.string,
};
