import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, changeDirection }) => (
  <button
    type="button"
    className="button"
    onClick={changeDirection}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  changeDirection: PropTypes.func.isRequired,
};

export default Button;
