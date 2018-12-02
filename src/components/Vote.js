import React from "react";
import PropTypes from "prop-types";

const Vote = ({ message, author }) => (
  <p>
    <i>{author}</i>: {message}
  </p>
);

Vote.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default Vote;
